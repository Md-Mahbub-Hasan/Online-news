import React from 'react';
import SwiftSlider from 'react-swift-slider';

const data = [
    { 'id': '1', 'src': 'https://cdn.pixabay.com/photo/2019/12/11/18/06/snowman-4688913__340.jpg', name: 'hello' },
    { 'id': '2', 'src': 'https://cdn.pixabay.com/photo/2016/11/14/16/20/snowflake-1823942__340.jpg' },
    { 'id': '3', 'src': 'https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289__340.jpg' },
    // { 'id': '4', 'src': 'https://i.imgur.com/SMQ0OPm.png' },
];

const SliderSection = () => {
    const sliderStyle = {
        // height: '600px',
    }
    return (
        <div style={sliderStyle}>
            <SwiftSlider
                data={data}
                height={400}
                // interval={5000}
                // dotColor="#F7345F"
                // activeDotColor="#473CFF"
                showDots={false}
                enableNextAndPrev={false}
            />
        </div>
    );
};

export default SliderSection;