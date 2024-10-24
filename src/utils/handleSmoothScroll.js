export const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    const navbarHeight = 80;

    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
};


export const handleScrollHome = (e)=>{
    e.preventDefault()
    window.scrollTo({top: 0, behavior:'smooth'})
}