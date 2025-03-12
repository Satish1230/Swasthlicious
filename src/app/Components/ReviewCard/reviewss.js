const Reviews = () => {
    const images = [ /* Image data here */ ];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [transitionClass, setTransitionClass] = useState('slideIn');
    const [initialRender, setInitialRender] = useState(true);
    const [isManualChange, setIsManualChange] = useState(false);

    const isPrevDisabled = selectedIndex === 0;
    const isNextDisabled = selectedIndex === images.length - 1;

    const slidePrev = () => {
        if (isPrevDisabled) return; // Prevent sliding if disabled
        setIsManualChange(true);
        setTransitionClass('slideOut');
        setTimeout(() => {
            if (swiperInstance) {
                swiperInstance.slidePrev();
                setSelectedIndex((prevIndex) =>
                    prevIndex === 0 ? images.length - 1 : prevIndex - 1
                );
            }
            setTransitionClass('slideIn');
            setInitialRender(false);
        }, 300);
    };

    const slideNext = () => {
        if (isNextDisabled) return; // Prevent sliding if disabled
        setIsManualChange(true);
        setTransitionClass('slideOut');
        setTimeout(() => {
            if (swiperInstance) {
                swiperInstance.slideNext();
                setSelectedIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }
            setTransitionClass('slideIn');
            setInitialRender(false);
        }, 300);
    };

    return (
        <div className={styles.Container}>
            <div className={styles.brown}>
                <div className={`${styles.details} ${!initialRender ? styles[transitionClass] : ''}`}>
                    <ReviewCard
                        profileImage={images[selectedIndex].src}
                        name={images[selectedIndex].name}
                        role={images[selectedIndex].role}
                        testimonial={images[selectedIndex].testimonial}
                        companyLogo={images[selectedIndex].companyLogo}
                        hikeTag={images[selectedIndex].hikeTag}
                    />
                </div>
            </div>

            <div className={styles.right}>
                {/* Custom navigation buttons */}
                <div className={styles.customNavigation}>
                    <button
                        className={styles.prevButton}
                        onClick={slidePrev}
                        disabled={isPrevDisabled}
                    >
                        <FaArrowLeft />
                    </button>
                </div>

                <div className={styles.heading}>
                    <h2>Real Stories, Real Success</h2>
                    <p>Discover what our learners say about us</p>
                </div>

                <Swiper
                    spaceBetween={10}
                    loop={false}
                    modules={[Navigation]}
                    className="mySwiper"
                    slidesPerView={4}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={image.id}>
                            <div
                                className={`${styles.gridItem} ${selectedIndex === index ? styles.selected : ''} ${selectedIndex !== index ? styles.whitish : ''}`}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <Image
                                    className={styles.bannerImage}
                                    src={image.src}
                                    alt={image.alt}
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={styles.rightarrow}>
                    <button
                        className={styles.nextButton}
                        onClick={slideNext}
                        disabled={isNextDisabled}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
