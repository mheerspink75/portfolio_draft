import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ContextReplacementPlugin } from "webpack";
import "./styles.css";

let resume =
  "https://drive.google.com/file/d/1zf5ePj1PSc1JixMhqqiZDZinqdfKVSWj/view?usp=sharing";

fetch("https://api.github.com/users/mheerspink75")
  .then((response) => response.json())
  .then((data) => {
    let is_hireable;
    data.hireable ? (is_hireable = "Yes") : (is_hireable = "No");
    document.getElementById("container").innerHTML = `<div id="c4">
        <img id="profilePic" src="${data.avatar_url}" alt="profile picture">
        <div id="name">
            ${data.name}
            <div>
                <a id="resume" href="${resume}" target="_blank">*<i>Resume<i></a>
            </div>
        </div>
        <p></p>
    </div>
    <p id="bio"><b>${data.bio}</b></p>
    <p id="forHire">*Available for hire? ${is_hireable}</p> `;
  });

let content = document.getElementById("content");

let h = document.getElementById("home");
h.onclick = home;

function home() {
  content.innerHTML = `<div
    id="carouselExampleFade"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <iframe
          src="https://mheerspink75.github.io/threejs-webpack-build/"
        ></iframe>
      </div>
      <div class="carousel-item">
        <iframe src="https://mheerspink75.github.io/crypto_news/"></iframe>
      </div>
      <div class="carousel-item">
        <iframe
          src="https://mheerspink75.github.io/check_palindrome/"
        ></iframe>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;
  return false;
}

window.onload = () => home();


let pj = document.getElementById("projects");
pj.onclick = projects;

function projects() {
  fetch("https://api.github.com/users/mheerspink75/repos")
    .then((response) => response.json())
    .then((data) => {
      let arr = [];
      for (let key in data) {
        let name = data[key].name;
        let url = data[key].html_url;
        let description = data[key].description;
        let homepage = data[key].homepage;
        if (data[key].description === null) {
          description = "None";
        }
        if (data[key].homepage === null) {
          homepage = "";
        } else {
          homepage = `<b>Homepage:</b>  <a href="${homepage}" target="_blank">${homepage}</a>`;
        }
        let list = `<div><b>Project:</b>  ${name}<br>
                    <b>Repository Url:</b> <a href="${url}" target="_blank">${url}</a><br>
                    <b>Description:</b>  ${description}<br>
                    ${homepage}</div>`;
        arr.push(list);
      }
      content.innerHTML = arr;
    });
  return false;
}

let ap = document.getElementById("about");
ap.onclick = about;

function about() {
  content.innerHTML = `<p>
  Matt Heerspink is a skilled associate software developer whose strong work ethic, attention to
  detail, and adaptability makes him a valuable addition to any project. He is a graduate of the
  FastTrack’D Java Developer program with certifications in full-Stack web development and
  multimedia, a bachelor’s degree in telecommunications, an associate’s degree in computer
  graphics and a background in technology operations engineering. Matt has displayed skills in
  developing, deploying, troubleshooting and maintaining Java applications. He has achieved a
  productive level of knowledge and skill in numerous Java frameworks such as Spring Framework
  and Spring MVC, Hibernate, and JDBC. Matt brings a positive outlook and a knack for problem
  solving to any team of which he is a member.
  <br><br>
  Programming: Java, SpringBoot, Spring MVC, Jackson, JPA, JDBC, JAXB, XML,
  JavaScript (ES2015+), NodeJS, Express, HTML5, CSS3, SASS, ReactJS,
  Bootstrap, Material-UI, JQuery, Python 3, Python Django, SQL, Webpack,
  Babel, Maven, NPM, PIP, Yarn.
 <br><br>
  Software: Eclipse, Intellj IDEA, Visual Studio Code, Git, Git Bash, GitHub, Cmder,
  PGAdmin, Microsoft Office 365, Adobe Suite
 <br>
  RDBMS: PostgreSQL, SQLite, mySQL, MongoDB Atlas, Cloud Firestore.
 <br>
  Operating Systems: Windows 10
  </p>`;
  return false;
}
