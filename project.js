let projects = []

console.log('data awal', projects);

function addProject(event) {

    event.preventDefault()

    let title = document.getElementById('input-project-name').value
    let startDate = document.getElementById('input-start-date').value
    let endDate = document.getElementById('input-end-date').value
    let desc = document.getElementById('input-project-desc').value
    let nodejs = document.getElementById('input-nodejs').checked
    let react = document.getElementById('input-react').checked
    let nextjs = document.getElementById('input-nextjs').checked
    let typescript = document.getElementById('input-typescript').checked
    let image = document.getElementById('input-project-image').files


    if (nodejs) {
       nodejs = document.getElementById('input-nodejs').value
    } else {
        nodejs =''
    }

    if (react) {
       react = document.getElementById('input-react').value
    } else {
        react =''
    }

    if (nextjs) {
       nextjs = document.getElementById('input-nextjs').value
    } else {
        nextjs =''
    }
 
    if (typescript) {
        typescript = document.getElementById('input-typescript').value
    } else {
        typescript =''
    }


    image = URL.createObjectURL(image[0]) // untuk menampilkan gambar agar tampil

    let project = {
        title: title,
        postAt: new Date(),
        author: 'Abdul Rahman E',
        startDate: startDate,
        endDate: endDate,
        desc: desc,
        nodejs: nodejs,
        react: react,
        nextjs: nextjs,
        typescript: typescript,
        image: image
    }


    projects.push(project)
    console.log('data ketika di tembahkan',projects);

    renderBlog()
}

let firstProject = 
    `
    <a href="detail.html" style="text-decoration: none; color: black;">
    <div class="card">
        <div>
            <img src="assets/blog 1.jpg" alt="" />
        </div>
        <div class="title">
            <h3>Dumbways Mobile App-2021</h3>
        </div>

        <div class="durasi">
            <P>durasi : 3 bulan</P>
        </div>

        <div class="desc">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard.
            </p>
        </div>

        <div class="tech">
            <i class="fa-brands fa-google-play"></i>
            <i class="fa-brands fa-android"></i>
            <i class="fa-brands fa-java"></i>
        </div>

        <div>
            <button  class="edit">edit</button>
            <button class="delete">delete</button>
        </div>
    </div>
    </a>

    <a href="detail.html" style="text-decoration: none; color: black;">
    <div class="card">
        <div>
            <img src="assets/blog 2.jpg" alt="" />
        </div>
        <div class="title">
            <h3>Dumbways Mobile App-2021</h3>
        </div>

        <div class="durasi">
            <P>durasi : 3 bulan</P>
        </div>

        <div class="desc">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard.
            </p>
        </div>

        <div class="tech">
            <i class="fa-brands fa-google-play"></i>
            <i class="fa-brands fa-android"></i>
            <i class="fa-brands fa-java"></i>
        </div>

        <div>
            <button  class="edit">edit</button>
            <button class="delete">delete</button>
        </div>
    </div>
    </a>
    
    <a href="detail.html" style="text-decoration: none; color: black;">
    <div class="card">
        <div>
            <img src="assets/blog 3.jpeg" alt="" />
        </div>
        <div class="title">
            <h3>Dumbways Mobile App-2021</h3>
        </div>

        <div class="durasi">
            <P>durasi : 3 bulan</P>
        </div>

        <div class="desc">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard.
            </p>
        </div>

        <div class="tech">
            <i class="fa-brands fa-google-play"></i>
            <i class="fa-brands fa-android"></i>
            <i class="fa-brands fa-java"></i>
        </div>

        <div>
            <button  class="edit">edit</button>
            <button class="delete">delete</button>
        </div>
    </div>
    </a>

    <a href="detail.html" style="text-decoration: none; color: black;">
    <div class="card">
        <div>
            <img src="assets/blog 4.jpg" alt="" />
        </div>
        <div class="title">
            <h3>Dumbways Mobile App-2021</h3>
        </div>

        <div class="durasi">
            <P>durasi : 3 bulan</P>
        </div>

        <div class="desc">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard.
            </p>
        </div>

        <div class="tech">
            <i class="fa-brands fa-google-play"></i>
            <i class="fa-brands fa-android"></i>
            <i class="fa-brands fa-java"></i>
        </div>

        <div>
            <button  class="edit">edit</button>
            <button class="delete">delete</button>
        </div>
    </div>
    </a>

    <a href="detail.html" style="text-decoration: none; color: black;">
    <div class="card">
        <div>
            <img src="assets/blog 5.jpg" alt="" />
        </div>
        <div class="title">
            <h3>Dumbways Web App-2021</h3>
        </div>

        <div class="durasi">
            <P>durasi : 3 bulan</P>
        </div>

        <div class="desc">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard.
            </p>
        </div>

        <div class="tech">
            <i class="fa-brands fa-google-play"></i>
            <i class="fa-brands fa-android"></i>
            <i class="fa-brands fa-java"></i>
        </div>

       <!-- <div>
           
       </div>  -->

        <div>
            <button  class="edit">edit</button>
            <button class="delete">delete</button>
        </div>
    </div>
    </a>
    

    `


function renderBlog() {

    document.getElementById('contents').innerHTML = firstProject

    for (let dataBlog = 0; dataBlog < projects.length; dataBlog++) {

        document.getElementById('contents').innerHTML +=
        `
            <div class="card">

                <div>
                    <img src= ${projects[dataBlog].image} /> 
                </div>

                <div class="title">
                    <h3> ${projects[dataBlog].title} </h3>
                </div>

                <div class="durasi">
                    <P>durasi:${getDate(projects[dataBlog].startDate, projects[dataBlog].endDate)}</P>
                </div>

                <div class="desc">
                    <p> ${projects[dataBlog].desc}
                    </p>
                </div>

                <div class="tech">
                    <i class="${projects[dataBlog].nodejs}"></i>
                    <i class="${projects[dataBlog].react}"></i>
                    <i class="${projects[dataBlog].nextjs}"></i>
                    <i class="${projects[dataBlog].typescript}"></i>                  
                </div>
                <div>
                    <button  class="edit">edit</button>
                    <button class="delete">delete</button>
                </div>
            </div>
        
        `
    }

}

function getDate(get_start_date, get_end_date) {
let startdate = new Date(get_start_date);
let enddate = new Date(get_end_date);
let jarak = enddate - startdate;
let milisecond = 1000;
let detik = 3600;
let jam = 24;
let hari = Math.floor(jarak / (milisecond * detik * jam));
let minggu = Math.floor(hari / 7);
let bulan = Math.floor(hari / 30);
if (hari <= 6) {
    return `${hari} hari yang lalu`;
} else if (hari > 30) {
    return `${bulan} bulan yang lalu`;
} else if (hari >= 6) {
    return `${minggu} minggu yang lalu`;
}
}
  