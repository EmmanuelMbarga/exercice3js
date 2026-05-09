import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({ params }: PageProps<"/home/[uid]">) {
	const { uid } = await params;
	const client = createClient();
	const page = await client.getByUID("home", uid);

	return <SliceZone slices={page.data.slices} components={components} />;
}