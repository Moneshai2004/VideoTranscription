import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest,res:NextResponse){
    const FormData = await req.body;
   const file = FormData.length('files');
   const {name,type} = file;

}