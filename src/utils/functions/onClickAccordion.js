const onClickAccordion = (event, onClick) => {
    event.stopPropagation();
    onClick && onClick();
};

export default onClickAccordion;
