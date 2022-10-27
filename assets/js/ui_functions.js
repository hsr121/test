const foundersData = [
    {
        img: "yogesh.png",
        name: "Yogesh",
        designation: "Founder (Vision)"
    },
    {
        img: "adarsh.png",
        name: "Adarsh",
        designation: "Founder (Operations)"
    },
    {
        img: "Sherwin.png",
        name: "Sherwin",
        designation: "Founder (Product)"
    },
    {
        img: "zeeshan.png",
        name: "Zeeshan",
        designation: "Founder (Technology)"
    },
    {
        img: "nilesh.png",
        name: "Nilesh",
        designation: "Founder (Growth)"
    },
    {
        img: "eddie.png",
        name: "Eddie",
        designation: "Founder (Marketing)"
    },
    {
        img: "avinash.png",
        name: "Avinash",
        designation: "Founder (Finance)"
    }
];
const RoadmapData = [
    {
        header: 'SEED ROUND COMMENCEMENT',
        body: "Seed round commencement with a maximum capital raise of US$1,850,000.00 enabling development, deployment, marketing and operations.",
        footer: 'H1 - 2021'
    },
    {
        header: 'CRYPTOXPRESS DEMO PLATFORM & PRO EXCHANGE',
        body: "Seed round commencement with a maximum capital raise of US$1,850,000.00 enabling development, deployment, marketing and operations.",
        footer: 'H1 - 2021'
    },
    {
        header: 'CRYPTOXPRESS V1 LAUNCH',
        body: "Launch of Fully Licensed CryptoXpress Version 1. Including IOS and Android apps with full NFT marketplace, cryptocurrency trading and built-in decentralized wallet.",
        footer: 'H2 - 2021'
    },
    {
        header: 'NFT WEB MARKETPLACE & CONTRACT UPGRADE',
        body: "Launch of web-based NFT marketplace and additional NFT features (collections, volume tracking, floor price tracking, and much more)",
        footer: 'H1 - 2022'
    },
    {
        header: 'RETAIL SERVICES',
        body: "Launch of CryptoXpress Retail services, offering the ability to purchase retail items from your favorite local retailers, using cryptocurrencies.",
        footer: 'H1 2023'
    },
    {
        header: 'TRAVEL SERVICES',
        body: "Launch of CryptoXpress Travel services, offering the ability to make hotel and flight bookings globally, using cryptocurrencies.",
        footer: 'H1 2023'
    },
    {
        header: 'METAVERSE RETAIL LOCATION',
        body: "Launch of the first CryptoXpress Metaverse outlet, offering the ability to purchase cryptocurrencies, NFTs, retail products and travel services in the Metaverse.",
        footer: 'H2 2023'
    },
    {
        header: 'E-BANKING SERVICES (EU)',
        body: "Launch of CryptoXpress E-banking services, offering e-banking solutions such as customer fiat IBAN accounts and cryptocurrency debit cards.",
        footer: 'H2 2023'
    }
];
const AdvisoryData = [
    {
        img: 'cryptoxpress-team-min.png',
        name: 'Min',
        role: 'Venture Capital',
        url: 'www.google.com'
    },
    {
        img: 'cryptoxpress-team-mardo.png',
        name: 'Mardo',
        role: 'Industry',
        url: 'www.google.com'
    },
    {
        img: 'cryptoxpress-team-randall.png',
        name: 'Randall',
        role: 'Legal',
        url: 'www.google.com'
    },
    {
        img: 'cryptoxpress-team-eric.png',
        name: 'Eric',
        role: 'Security',
        url: 'www.google.com'
    },
    {
        img: 'cryptoxpress-team-randall.png',
        name: 'Randall',
        role: 'Legal',
        url: 'www.google.com'
    }
];


const populate = () => {
    populateFounder();
    populateRoadmap();
    populateAdvisory();
}


const prev = function () {
    document.getElementById('left').click();
};
const next = function () {
    document.getElementById('right').click();
};

const prevRoadmap = function () {
    document.getElementById('leftRoadmap').click();
}
const nextRoadmap = function () {
    document.getElementById('nextRoadmap').click();
}
const prevAdvisory = function () {
    document.getElementById('leftAdvisory').click();
}
const nextAdvisory = function () {
    document.getElementById('nextAdvisory').click();
}

const populateFounder = () => {
    let set = 0;
    for (let i = 0; i < foundersData.length; i++) {
        let listItem = document.createElement('li');
        listItem.setAttribute("data-target", '#slider');
        listItem.setAttribute("data-slide-to", set);
        set++;
        if (i == 0) {
            listItem.classList.add("active");
        }

        let slider = document.getElementById("founder-indicator");
        slider.append(listItem);

        let founders = document.createElement("div");
        founders.classList.add("founders-slide");
        let j = i;
        let x = Math.floor(document.getElementById('founder-population-point').clientWidth / 200);
        console.log(x);
        for (; j < i + x && j < foundersData.length; j++) {
            var item = foundersData[j];
            var founder = document.createElement('div');
            var image = document.createElement('img');
            var name = document.createElement("div");
            var designation = document.createElement("div");
            var founder_part = document.createElement("div");

            name.classList.add("founder-name");
            designation.classList.add("designation");
            image.classList.add("founder-image");
            founder.classList.add("founder");
            founder_part.classList.add("founder-part");

            image.src = "assets/images/" + item.img;
            name.innerText += item.name;
            designation.innerText += item.designation;
            founder_part.appendChild(name);
            founder_part.appendChild(designation);

            founder.appendChild(image);
            founder.appendChild(founder_part);
            if(j==i){
                founder.style.marginLeft = "0px";
            }
            founders.append(founder);

        }

        const d_block = document.createElement('div');
        d_block.classList.add("d-flex","w-100", "justify-content-center");
        const md = document.createElement('div');
        md.classList.add('col-md-30');
        md.append(founders);
        d_block.append(md);

        var carouselString = "carousel-item";
        const nod = document.createElement('div');
        nod.classList.add(carouselString);
        nod.append(d_block);

        const point = document.getElementById('founder-population-point');
        point.append(nod);
        i = j - 1;
    }
    const point = document.getElementById('founder-population-point');
    point.firstElementChild?.classList.add('active');
    console.log($("#slider").carousel({
        interval: false
    }));
}

const populateRoadmap = () => {
    let set = 0;
    for (let i = 0; i < RoadmapData.length; i++) {
        let listItem = document.createElement('li');
        listItem.setAttribute("data-target", '#sliderRoadmap');
        listItem.setAttribute("data-slide-to", set);
        set++;
        if (i == 0) {
            listItem.classList.add("active");
        }

        let slider = document.getElementById("roadmap-indicator");
        slider.append(listItem);
        let roadmaps = document.createElement("div");
        roadmaps.classList.add("roadmap-slide");
        let j = i;
        let x = Math.floor(document.getElementById('roadmap-population-point').clientWidth / 200);
        for (; j < i + x && j < RoadmapData.length; j++) {
            var item = RoadmapData[j];
            let header = document.createElement('div');
            let body = document.createElement('div');
            let footer = document.createElement('div');
            let milestone = document.createElement('div');
            let card = document.createElement('div');

            header.innerText += item.header;
            body.innerText += item.body;
            footer.innerText += item.footer;

            header.classList.add("card-header");
            body.classList.add("card-body");
            footer.classList.add('card-foot');
            milestone.append(header, body, footer);
            milestone.classList.add("milestones");
            card.append(milestone);
            card.classList.add("card", "text-center");
            if(j==i){
                card.style.marginLeft = "0px";
            }
            roadmaps.append(card);
        }
        const d_block = document.createElement('div');
        d_block.classList.add("d-flex","w-100", "justify-content-center");
        const md = document.createElement('div');
        md.classList.add('col-md-30');
        md.append(roadmaps);
        d_block.append(md);

        var carouselString = "carousel-item";
        const nod = document.createElement('div');
        nod.classList.add(carouselString);
        nod.append(d_block);

        const point = document.getElementById('roadmap-population-point');
        point.append(nod);
        i = j - 1;
    }
    const point = document.getElementById('roadmap-population-point');
    point.firstElementChild?.classList.add('active');
    console.log($("#sliderRoadmap").carousel({
        interval: false
    }));
}

const populateAdvisory = () => {
    let set = 0;
    for (let i = 0; i < AdvisoryData.length; i++) {
        let listItem = document.createElement('li');
        listItem.setAttribute("data-target", '#sliderAdvisory');
        listItem.setAttribute("data-slide-to", set);
        set++;
        if (i == 0) {
            listItem.classList.add("active");
        }

        let slider = document.getElementById("advisory-indicator");
        slider.append(listItem);
        let advisors = document.createElement("div");
        advisors.classList.add("advisory-slide");
        let j = i;
        let x = Math.floor(document.getElementById('advisory-population-point').clientWidth / 200);
        for (; j < i + x && j < AdvisoryData.length; j++) {
            var item = AdvisoryData[j];
            console.log(item)
            let image = document.createElement('img');
            image.classList.add('member-img');
            image.src = "assets/images/" + item.img;

            let name = document.createElement('div');
            name.innerText += item.name;

            let role = document.createElement('div');
            role.innerText = item.role;
            role.classList.add('memberRole');

            let nameComponent = document.createElement('div');
            nameComponent.classList.add('memberName');
            nameComponent.append(name, role);

            let linkedIn = document.createElement('img');
            linkedIn.classList.add('linkedinLogo');
            linkedIn.src = 'assets/images/linkedin-icon.png';

            let redirect = document.createElement('a');
            // redirect.onclick((e) => {
            //     window.open(item.url, '_blank');
            // });
            redirect.append(linkedIn);

            let member = document.createElement('div');
            member.classList.add('member');
            member.append(image, nameComponent, redirect);

            if(j==i){
                member.style.marginLeft = "0px";
            }

            advisors.append(member);
        }
        const d_block = document.createElement('div');
        d_block.classList.add("d-flex","w-100", "justify-content-center");
        const md = document.createElement('div');
        md.classList.add('col-md-30');
        md.append(advisors);
        d_block.append(md);

        var carouselString = "carousel-item";
        const nod = document.createElement('div');
        nod.classList.add(carouselString);
        nod.append(d_block);

        const point = document.getElementById('advisory-population-point');
        point.append(nod);
        i = j - 1;
    }
    const point = document.getElementById('advisory-population-point');
    point.firstElementChild?.classList.add('active');
    console.log($("#sliderAdvisory").carousel({
        interval: false
    }));
}
