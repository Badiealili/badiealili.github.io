export default function GalleryImage({ image }) {
    // Exist full screen image mode
    const handleClick = (e) => {
        const image = e.currentTarget.querySelector("img");
        const newImage = image.cloneNode(false);
        newImage.addEventListener("click", (e) => {
            document.body.removeChild(e.target);
        });
        const imageContainer = document.createElement("div");
        imageContainer.prepend(newImage);
        imageContainer.classList.add("display-image-container");
        imageContainer.addEventListener("click", ()=> {
            document.body.removeChild(imageContainer);
        })
        document.body.prepend(imageContainer);
    };

    return (
        <div
            onClick={handleClick}
            className="image-container group relative h-fit overflow-hidden rounded-xl"
        >
            <div className="absolute -top-full h-fit w-full bg-opacity-10 bg-gradient-to-b from-neutral-900 px-4 py-2 text-[10px] text-neutral-50 transition-all duration-200 ease-in group-hover:top-0">
                {image.date}
            </div>
            <img className="object-cover" src={image.src} alt={image.alt} />
            <div className="absolute -bottom-full left-2 right-2 h-fit rounded-lg bg-accent-200 px-4 py-2 text-[10px] font-medium leading-4 text-primary-800 transition-all duration-200 ease-in group-hover:bottom-2">
                {image.description}
            </div>
        </div>
    );
}
