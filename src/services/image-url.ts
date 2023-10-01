import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage;
    const target = '/src/assets/';
    
    return target + url;
    
}

export default getCroppedImageUrl