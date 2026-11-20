import { getAssetInfo, getAssetOriginalPath, getAssetThumbnailPath, init } from "@immich/sdk";

const API_KEY = 'xpf16ff5dvvOPqqkm1kMD3dcnsGjhkF7wfaNBdy2Vk';
const BASE_URL = 'https://photos.rarlog.me/api'
const PHOTO_URL = 'https://web-photos.rarlog.me/api'

init({ baseUrl: BASE_URL, apiKey: API_KEY });

export type imageSizeType = {
    width: number;
    height: number;
}

export function getOriginalFromId(id: string) {
    return `${PHOTO_URL}${getAssetOriginalPath(id)}`;
}

export function getThumbnailFromId(id: string) {
    return `${PHOTO_URL}${getAssetThumbnailPath(id)}`;
}

export async function getOriginalSize(id: string) {
    let info = await getAssetInfo({ id: id })

    let size: imageSizeType = {
        width: info.width ?? 0,
        height: info.height ?? 0
    }

    return size
}
