import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function POST(request) {

  revalidatePath("/", "layout")
  redirect("/")
}
