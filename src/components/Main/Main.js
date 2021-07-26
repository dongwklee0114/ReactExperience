import React, {useState, useEffect} from 'react';

import radarChartAType from 'modulesCustom/amchart/radarChartAType';

import Hero from 'components/Hero/Hero';
import Container from 'components/Container/Container';
import NavContent from 'components/NavContent/NavContent';
import ImageCard from 'components/ImageCard/ImageCard';
import Chart from 'components/Chart/Chart';
import ContactUs from 'components/ContactUs/ContactUs';

function Main() {
    const imageList = [
        './heroImage.png', // hero image
        'https://dummyimage.com/48x48/ff2727/fff', // imageCard icon
        'https://dummyimage.com/48x48/ff9d0c/fff', // imageCard icon
        'https://dummyimage.com/48x48/080/fff', // imageCard icon
    ]
    const titleList = [
        '리엑트 메인 페이지', // hero title
        '빨간색', // imageCard title
        '주황색', // imageCard title
        '초록색' // imageCard title
    ]
    const descList = [
        '리엑트를 사용해 만든 SPA(Single Page App)입니다.', // hero desc
        '눈에 띄는 강렬함으로 알려진 빨간색은 강한 감정적인 반응을 불러일으킵니다. 빨간색은 식욕, 흥분, 불안을 높일 수 있습니다.', // imageCard desc
        '주황색은 빨간색의 강렬함과 노란색의의 활기를 합친 것입니다. 보통 자신감, 활동성, 새로운 출발을 의미합니다.', // imageCard desc
        '다양하게 쓰일 수 있는 이 색상은 종종 울창한 숲, 풍성한 수확, 번영을 연상시키고 성장, 안전, 재생과 관련된 느낌을 줍니다.' // imageCard desc
    ]
    const navContentList = [
        {
            id: '1',
            title: 'Multiple Color',
            contentType: 'img',
            content: [
                'https://dummyimage.com/240x240/ee3239/fff',
                'https://dummyimage.com/240x240/5eaa5f/fff',
                'https://dummyimage.com/240x240/fece00/fff',
                'https://dummyimage.com/240x240/9d6ab9/fff',
                'https://dummyimage.com/240x240/bedae5/fff',
                'https://dummyimage.com/240x240/1f1762/fff',
                'https://dummyimage.com/240x240/ffc2c3/fff',
                'https://dummyimage.com/240x240/642a02/fff',
                'https://dummyimage.com/240x240/7bc5ae/fff',
                'https://dummyimage.com/240x240/9c8f96/fff'
            ]
        }, {
            id: '2',
            title: 'Brightness',
            contentType: 'img',
            content: [
                'https://dummyimage.com/240x240/000/fff',
                'https://dummyimage.com/240x240/111/fff',
                'https://dummyimage.com/240x240/222/fff',
                'https://dummyimage.com/240x240/333/fff',
                'https://dummyimage.com/240x240/444/fff',
                'https://dummyimage.com/240x240/555/fff',
                'https://dummyimage.com/240x240/666/fff',
                'https://dummyimage.com/240x240/777/fff',
                'https://dummyimage.com/240x240/999/fff',
                'https://dummyimage.com/240x240/fff/000',
            ]
        }, {
            id: '3',
            title: 'Saturation',
            contentType: 'img',
            content: [
                'https://dummyimage.com/240x240/ff0000/fff',
                'https://dummyimage.com/240x240/e30000/fff',
                'https://dummyimage.com/240x240/c40202/fff',
                'https://dummyimage.com/240x240/be0000/fff',
                'https://dummyimage.com/240x240/ad0000/fff',
                'https://dummyimage.com/240x240/8e0000/fff',
                'https://dummyimage.com/240x240/6d0000/fff',
                'https://dummyimage.com/240x240/530000/fff',
                'https://dummyimage.com/240x240/270000/fff',
                'https://dummyimage.com/240x240/000000/fff'
            ]
        }, {
            id: '4',
            title: 'Description',
            contentType: 'text',
            content: <p>여러분께서는 의도적으로든 아니든 늘 색상을 결정합니다. 보통 본능적으로 색을 결정하지만,<br/>
                실제로는 색채 이론이라는 이 모든 것을 설명하는 과학 분야가 있습니다.<br/>
                색채 이론은 서로 다른 색이 어떻게 관련되어 있는지와 여러 색채 조합과 합쳐졌을 때 어떻게 보이는지를 설명합니다.<br/>
                색채 이론에서 파생된 색채 심리학은 색상과 감정을 설명합니다.<br/>
                이 두 가지 분야의 색채 지식은 이벤트를 알리기 위한 전단지를 만들어야 하는 소기업 사장,<br/>
                프로젝트에 어울리는 색채 배합을 골라야 하는 디자이너,<br/>
                새로운 스타트업의 로고를 디자인하고자 하는 기업가와 관계없이 색상을 다루는 모든 사람에게 중요한 정보입니다.</p>
        }
    ]
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const [navContentItem, setNavContentItem] = useState([]);
    const containerList = [
        {
            id: 1,
            backgroundColor: 'blackBg',
            content: navContentItem
        }, {
            id: 2,
            backgroundColor: 'lightBrownBg',
            content: <div className='imageCardRow'>
                <ImageCard key={'1'} itemCount={'3'} image={imageList[1]} title={titleList[1]}
                           description={descList[1]}/>
                <ImageCard key={'2'} itemCount={'3'} image={imageList[2]} title={titleList[2]}
                           description={descList[2]}/>
                <ImageCard key={'3'} itemCount={'3'} image={imageList[3]} title={titleList[3]}
                           description={descList[3]}/>
            </div>
        }, {
            id: 3,
            backgroundColor: 'blackBg',
            content: <Chart title='Completeness'/>
        }, {
            id: 4,
            backgroundColor: 'whiteBg',
            content: <ContactUs/>
        }
    ]

    function navContentBtn(selectIndex) {
        setCurrentContentIndex(selectIndex)
    }

    function navContentIndex() {
        let selectNavContentList = navContentList[currentContentIndex]
        setNavContentItem(
            <NavContent key={selectNavContentList.id}
                        onClick={navContentBtn}
                        contentCount={navContentList.length}
                        title={selectNavContentList.title}
                        currentIndex={currentContentIndex}
                        contentType={selectNavContentList.contentType}
                        content={selectNavContentList.content}/>
        )
    }

    useEffect(() => {
        navContentIndex()
    }, [currentContentIndex])

    radarChartAType('chartDiv');

    return <section className='wrap'>
        <Hero image={imageList[0]} title={titleList[0]} description={descList[0]}/>
        {containerList.map((item, i) =>
            <Container key={i} backgroundColor={item.backgroundColor} content={item.content}/>
        )}
    </section>
}

export default Main;

