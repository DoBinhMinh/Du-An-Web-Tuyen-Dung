import { Request, Response } from "express";
import Job from "../models/job.model";
import AccountCompany from "../models/account-company.model";
import CV from "../models/cv.model";

export const detail = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const record = await Job.findOne({
      _id: id
    })

    if(!record) {
      res.json({
        code: "error",
        message: "Thất bại!"
      })
      return;
    }

    const companyInfo = await AccountCompany.findOne({
      _id: record.companyId
    })

    if(!companyInfo) {
      res.json({
        code: "error",
        message: "Thất bại!"
      })
      return;
    }

    const jobDetail = {
      id: record.id,
      title: record.title,
      companyName: companyInfo.companyName,
      salaryMin: record.salaryMin,
      salaryMax: record.salaryMax,
      images: record.images,
      position: record.position,
      workingForm: record.workingForm,
      companyAddress: companyInfo.address,
      technologies: record.technologies,
      description: record.description,
      companyLogo: companyInfo.logo,
      companyId: record.companyId,
      companyModel: companyInfo.companyModel,
      companyEmployees: companyInfo.companyEmployees,
      workingTime: companyInfo.workingTime,
      workOvertime: companyInfo.workOvertime
    };

    res.json({
      code: "success",
      message: "Thành công!",
      jobDetail: jobDetail
    })
  } catch (error) {
    res.json({
      code: "error",
      message: "Thất bại!"
    })
  }
}

import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

export const applyPost = async (req: Request, res: Response) => {
  try {
    let fileCVUrl = "";

    if (req.file) {
      const uploadResult = await new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: "raw", folder: "cvs", format: "pdf" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result!.secure_url);
          }
        );
        Readable.from(req.file!.buffer).pipe(uploadStream);
      });
      fileCVUrl = uploadResult;
    }

    req.body.fileCV = fileCVUrl;
    const newRecord = new CV(req.body);
    await newRecord.save();

    res.json({ code: "success", message: "Đã gửi CV thành công!" });
  } catch (error) {
    console.log(error);
    res.json({ code: "error", message: "Dữ liệu không hợp lệ!" });
  }
};