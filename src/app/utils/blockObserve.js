const blockObserve = (block, action) => {
    function onEntry(entry) {
        entry.forEach((change) => {
            if (change.isIntersecting) {
                action();
            }
        });
    }
    const options = { threshold: [0] };
    const observer = new IntersectionObserver(onEntry, options);
    observer.observe(block);
};

export default blockObserve;
