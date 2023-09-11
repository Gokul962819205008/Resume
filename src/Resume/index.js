// import React from 'react';
// import Experience from '../Experience';
// import Education from '../Education';
// import About from '../About';
// import Certification from '../Certification';
// import ReactHtmlParser from 'react-html-parser'; // Import react-html-parser

// class Resume extends React.Component {
//   render() {
//     // Define the HTML code provided
//     const htmlCode = `
//     <!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//       <meta charset="utf-8">
//       <meta content="width=device-width, initial-scale=1.0" name="viewport">
    
//       <title>Aswin's Protofoilo</title>
//       <meta content="" name="description">
//       <meta content="" name="keywords">
    
//       <!-- Favicons -->
//       <link href="assets/img/favicon.png" rel="icon">
//       <link href="assets/img/apple-touch-icon.jpg" rel="apple-touch-icon">
    
//       <!-- Google Fonts -->
//       <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    
//       <!-- Vendor CSS Files -->
//       <link href="assets/vendor/aos/aos.css" rel="stylesheet">
//       <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
//       <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
//       <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
//       <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
//       <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
    
//       <!-- Template Main CSS File -->
//       <link href="assets/css/style.css" rel="stylesheet">
    
//       <!-- =======================================================
//       * Template Name: iPortfolio - v3.10.0
//       * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
//       * Author: BootstrapMade.com
//       * License: https://bootstrapmade.com/license/
//       ======================================================== -->
//     </head>
    
//     <body>
    
//       <!-- ======= Mobile nav toggle button ======= -->
//       <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    
//       <!-- ======= Header ======= -->
//       <header id="header">
//         <div class="d-flex flex-column">
    
//           <div class="profile">
//             <img src="assets/img/favicon.png" alt="" class="img-fluid rounded-circle">
//             <h1 class="text-light"><a href="index.html">Gokul M</a></h1>
//             <div class="social-links mt-3 text-center">
//               <a href="" class="github"><i class="bx bxl-github"></i></a>
//               <a href="gokulmohandhas1612@gmail.com" class="facebook"><i class="bx bxl-gmail"></i></a>
//               <a href="https://instagram.com/mr_blck_offl?igshid=YmJhNjkzNzY=" target="blank" class="instagram"><i class="bx bxl-instagram"></i></a>
//               <a href="https://wa.me/+917358953132?text=Hi%20gokul!" class="google-plus"><i class="bx bxl-whatsapp"></i></a>
//               <a href="" target="blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
//             </div>
//           </div>
    
//           <nav id="navbar" class="nav-menu navbar">
//             <ul>
//               <li><a href="index.html" class="nav-link scrollto "><i class="bx bx-home"></i> <span>Home</span></a></li>
//               <li><a href="about.html" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
//               <li><a href="skills.html" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Skills</span></a></li>
//               <li><a href="travel.html" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Tale of Travel</span></a></li>
//               <li><a href="project.html" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Project</span></a></li>
//               <li><a href="contact.html" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
//             </ul>
//           </nav><!-- .nav-menu -->
//         </div>
//       </header><!-- End Header -->
//       <main id="main">
//             <!-- ======= About Section ======= -->
//             <section id="about" class="about section-bg">
//                 <div class="container">
          
//                   <div class="section-title">
//                     <h2>ABOUT</h2>
//                     <p>As a web developer and traveler, I have the best of both worlds.
//                        My passion for coding and my love for exploring new places come together to create an exciting and 
//                        fulfilling lifestyle. Whether I'm working on building innovative websites and applications or embarking 
//                        on adventures to far-flung destinations, I thrive on the opportunities to learn, create, and connect with 
//                        people from diverse cultures. From writing elegant lines of code to capturing breathtaking moments with
//                         my camera, I am constantly inspired by the ever-evolving landscape of technology and the beauty of the 
//                         world. As a web developer, I harness my skills to bring creative visions to life, while as a traveler,
//                          I seek out new experiences that broaden my horizons and feed my wanderlust. With a curious mind and a 
//                          heart that craves discovery,
//                       I am always ready for the next adventure, both in the digital realm and the physical world.
//                     </p>
//                   </div>
          
//                   <div class="row">
//                     <div class="col-lg-4" data-aos="fade-right">
//                       <img src="assets/img/profile.jpg" class="img-fluid" alt="">
//                     </div>
//                     <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
//                       <h3>Gokul M</h3>
//                       <div class="row">
//                         <div class="col-lg-6">
//                           <ul>
//                             <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>06 March 2002</span></li>
//                             <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href="tel:+91 7358953132">+91 7358953132</a></span></li>
//                             <li><i class="bi bi-chevron-right"></i> <strong>Mail:</strong> <span><a href="gokulmohandhas1612@gmail.com">gokulmohandhas1612@gmail.com</a></span></li>
//                             <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nagercoil, kanyakumari</span></li>
//                           </ul>
//                         </div>
//                         <div class="col-lg-6">
//                           <ul>
//                             <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
//                             <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech </span></li>
//                             <li><i class="bi bi-chevron-right"></i> <strong>Stream:</strong> <span>Information Technology </span></li>
                            
//                             <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
//                           </ul>
//                         </div>
//                       </div>
//                       <p>
//                        To be Updated....
//                       </p>
//                     </div>
//                   </div>
          
//                 </div>
//               </section><!-- End About Section -->
//             </main>
//         <!-- ======= Footer ======= -->
//       <footer id="footer">
//         <div class="container">
//           <div class="copyright">
//             All &copy; Copyrights reserved 
        
//            </div>
//           <div class="credits">
//             <!-- All the links in the footer should remain intact. -->
//             <!-- You can delete the links only if you purchased the pro version. -->
//             <!-- Licensing information: https://bootstrapmade.com/license/ -->
//             <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ -->
//             Designed by <a href="#">Gokul M</a>
//           </div>
//         </div>
//       </footer><!-- End  Footer -->
    
//       <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
//       <!-- Vendor JS Files -->
//       <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
//       <script src="assets/vendor/aos/aos.js"></script>
//       <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
//       <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
//       <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
//       <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
//       <script src="assets/vendor/typed.js/typed.min.js"></script>
//       <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
//       <script src="assets/vendor/php-email-form/validate.js"></script>
    
//       <!-- Template Main JS File -->
//       <script src="assets/js/main.js"></script>
    
//     </body>
    
//     </html>
//     `;

//     return (
//       <div className="resume">
//         {/* Render the parsed HTML code */}
//         {ReactHtmlParser(htmlCode)}

//         {/* Experience Section */}
//         <Experience
//           title="Web Developer"
//           company="ABC Web Solutions"
//           date="July 2020 - Present"
//           description={[
//             'Develop and maintain responsive websites using HTML, CSS, and JavaScript.',
//             'Collaborate with clients to understand project requirements and provide technical solutions.',
//             'Optimize website performance and ensure cross-browser compatibility.',
//           ]}
//         />

//         {/* Education Section */}
//         <Education
//           institution="XYZ University"
//           degree="Bachelor of Science in Computer Science"
//           date="May 2020"
//         />

//         {/* About Section */}
//         <About
//           summary="A highly motivated and experienced web developer with a strong background in front-end and back-end web development. Skilled in HTML, CSS, JavaScript, and various web development frameworks."
//         />

//         {/* Certification Section */}
//         <Certification
//           title="React Developer Certification"
//           institution="React Academy"
//           date="January 2021"
//         />

//         {/* Add more sections or components as needed */}
//       </div>
//     );
//   }
// }

// export default Resume;

import React from 'react';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import Certification from './Certification';

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <iframe
          src="/resume.html" // Path to your HTML file in the public folder
          title="Resume"
          width="100%"
          height="800px"
          frameBorder="0"
        ></iframe>

        {/* Experience Section */}
        <Experience
          title="Web Developer"
          company="ABC Web Solutions"
          date="July 2020 - Present"
          description={[
            'Develop and maintain responsive websites using HTML, CSS, and JavaScript.',
            'Collaborate with clients to understand project requirements and provide technical solutions.',
            'Optimize website performance and ensure cross-browser compatibility.',
          ]}
        />

        {/* Education Section */}
        <Education
          institution="XYZ University"
          degree="Bachelor of Science in Computer Science"
          date="May 2020"
        />

        {/* About Section */}
        <About
          summary="A highly motivated and experienced web developer with a strong background in front-end and back-end web development. Skilled in HTML, CSS, JavaScript, and various web development frameworks."
        />

        {/* Certification Section */}
        <Certification
          title="React Developer Certification"
          institution="React Academy"
          date="January 2021"
        />

        {/* Add more sections or components as needed */}
      </div>
    );
  }
}

export default Resume;

