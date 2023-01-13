export function getImageLink(item) {
    const imageProps = item.image;
    return imageProps && imageProps.length > 0 ? imageProps : "/placeholder.png";
  }