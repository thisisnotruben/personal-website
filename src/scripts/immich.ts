const PHOTO_URL = import.meta.env.PUBLIC_PHOTO_URL + '/api'

export type imageSizeType = { width: number; height: number; }

export function getOriginalFromId(id: string) {
    // https://api.immich.app/endpoints/assets/downloadAsset
    return `${PHOTO_URL}/assets/${id}/original`;
}

export function getThumbnailFromId(id: string) {
    // https://api.immich.app/endpoints/assets/viewAsset
    return `${PHOTO_URL}/assets/${id}/thumbnail`;
}

export async function getOriginalSize(id: string) {
    // https://api.immich.app/endpoints/assets/getAssetInfo
    let size: imageSizeType = { width: 0, height: 0 }
    await fetch(`${PHOTO_URL}/assets/${id}`).then(async r =>
        await r.json().then(b => {
            size.width = b['width'];
            size.height = b['height'];
        })
    );
    return size;
}
