import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const photoId = params?.id;
  const data = getPhotoById(photoId);
  return NextResponse.json(data);
}
