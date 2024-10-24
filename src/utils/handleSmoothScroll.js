export const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

export const handleScrollHome = (e)=>{
    e.preventDefault()
    window.scrollTo({top: 0, behavior:'smooth'})
}