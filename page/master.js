let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let passimg = document.querySelector("#passimg")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울') {
        $(pass1).append('서울 전 지역')
        pass2.textContent = '서울 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F001.png?alt=media&token=341f87f0-b191-4f7d-8787-34007721561f'
    }
    if(text === '부산') {
        $(pass1).append('부산 전 지역')
        pass2.textContent = '부산 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F002.png?alt=media&token=125bd2ab-5724-48ce-9d33-ce04c7d32000'
    }
    if(text === '대구') {
        $(pass1).append('대구 전 지역')
        pass2.textContent = '대구 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F003.png?alt=media&token=4481efa7-fb32-4288-8e79-a7787c25ab7d'
    }
    if(text === '인천') {
        $(pass1).append('인천 전 지역')
        pass2.textContent = '인천 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F004.png?alt=media&token=743ebb8e-4167-4296-8ba7-b8d520f63782'
    }
    if(text === '광주') {
        $(pass1).append('광주 전 지역')
        pass2.textContent = '광주 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F005.png?alt=media&token=c4b83c09-98b8-4060-90f2-e72f9e1bd734'
    }
    if(text === '대전') {
        $(pass1).append('대전 전 지역')
        pass2.textContent = '대전 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F006.png?alt=media&token=6035350a-030c-444f-ad95-b2fb73fd681d'
    }
    if(text === '울산') {
        $(pass1).append('울산 전 지역')
        pass2.textContent = '울산 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F007.png?alt=media&token=0f917c07-50d0-4803-9527-13db6da8c050'
    }
    if(text === '경기') {
        $(pass1).append('경기 전 지역')
        pass2.textContent = '경기 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F008.png?alt=media&token=a8a5fb1f-713d-409b-aeea-69b7fffe5e6a'
    }
    if(text === '강원') {
        $(pass1).append('강원 전 지역')
        pass2.textContent = '강원 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F009.png?alt=media&token=00b7b1ec-fc0b-4be2-b8fc-96531889ecfa'
    }
    if(text === '충북') {
        $(pass1).append('충북 전 지역')
        pass2.textContent = '충북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F010.png?alt=media&token=0af6a5ca-08b1-46e3-9942-0e617a37ec1c'
    }
    if(text === '충남') {
        $(pass1).append('충남 전 지역')
        pass2.textContent = '충남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F011.png?alt=media&token=6b789878-a2f5-4d02-8682-4a598743a061'
    }
    if(text === '전북') {
        $(pass1).append('전북 전 지역')
        pass2.textContent = '전북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F012.png?alt=media&token=87013c8b-e844-4f44-9a33-534838ba1af0'
    }
    if(text === '전남') {
        $(pass1).append('전남 전 지역')
        pass2.textContent = '전남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F013.png?alt=media&token=d6a82471-4e9f-446c-a81a-57f39f438761'
    }
    if(text === '경북') {
        $(pass1).append('경북 전 지역')
        pass2.textContent = '경북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F014.png?alt=media&token=bd909e8b-a43c-4fc5-b0ed-f6ad2e18c3bd'
    }
    if(text === '경남') {
        $(pass1).append('경남 전 지역')
        pass2.textContent = '경남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F015.png?alt=media&token=4decb2fe-0db4-437b-bd8e-db0d28bd6295'
    }
    if(text === '세종') {
        $(pass1).append('세종 전 지역')
        pass2.textContent = '세종 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F016.png?alt=media&token=ff2fc694-ef75-4bd4-9c74-093e2c5f7050'
    }
    if(text === '제주') {
        $(pass1).append('제주 전 지역')
        pass2.textContent = '제주 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/ojowa-75dc7.appspot.com/o/photo%2F017.png?alt=media&token=59f48ff2-c3a3-417e-aeeb-671dac0a1885'
    }
}