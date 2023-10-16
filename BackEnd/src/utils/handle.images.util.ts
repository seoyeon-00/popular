import { handleImage } from './handle.image.util';

export async function handleImages(
	base64Images: string[],
): Promise<{ [key: string]: string }> {
	const imageMapping: { [key: string]: string } = {};

	for (let imgData of base64Images) {
		const targetDir = '/uploads';
		const imagePublicUrlBase =
			'https://port-0-popular-6w1j2allzfh0gg.sel5.cloudtype.app/';
		const imageUrl = await handleImage(imgData, targetDir, imagePublicUrlBase);

		imageMapping[imgData] = imageUrl;
	}

	return imageMapping;
}
