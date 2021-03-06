import Head from 'next/head'
import Layout from '../components/layout'
import course from '../lib/data/course.json'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="/styles/main.css" />
        <title>Syandsign Academy</title>
      </Head>
      <Navbar />
      <div className="container-fluid hero">
        <div className="row h-100 text-white">
          <div className="col-lg align-self-center p-5">
            <h1 className="display-4 font-weight-bold">Express yourself.<br />Show creativity.<br />Stay inspired.</h1>
            <button className="btn btn-light">Read More</button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row h-100 p-5 my-3">
          <div className="col-lg align-self-center">
            <h4 className="font-weight-bold">Fast support</h4>
            <p>Lorem ipsum</p>
          </div>
          <div className="col-lg align-self-center">
            <h4 className="font-weight-bold">What we do</h4>
            <p>Lorem ipsum</p>
          </div>
          <div className="col-lg align-self-center">
            <h4 className="font-weight-bold">What we are</h4>
            <p>Lorem ipsum</p>
          </div>
          <div className="col-lg align-self-center">
            <h4 className="font-weight-bold">Contact us</h4>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>

      <div className="container-fluid tour">
        <div className="row h-100">
          <div className="col-lg image">
          </div>
          <div className="col-lg align-self-center text">
            <h2 className="font-weight-bold">Take a tour</h2>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>

      <div className="container-fluid course">
        <div className="row h-100 p-lg-5 my-3">
          <div className="col-12">
            <ul className="list-inline">
              <li className="list-inline-item mr-4"><a href="#" className="font-weight-bold text-dark">Show all</a></li>
              <li className="list-inline-item mr-4"><a href="#" className="font-weight-bold text-dark">Learning</a></li>
              <li className="list-inline-item mr-4"><a href="#" className="font-weight-bold text-dark">Popular</a></li>
              <li className="list-inline-item mr-4"><a href="#" className="font-weight-bold text-dark">Certificate</a></li>
            </ul>
          </div>
          {course.map(x => (
            <div className="col-lg-4 align-self-center mb-4" key={x.id}>
              <div className="card border-0">
                <img src={x.image} className="card-img-top" alt="..." />
                <div className="card-body p-0 pt-4">
                  <h5 className="card-title font-weight-bold">{x.title}</h5>
                  <p className="text-muted">{x.mentor}</p>
                  <p className="card-text">{x.excerpt}</p>
                  <small className="float-left text-muted">{x.students} Students&nbsp;&nbsp;&nbsp;{x.time} Hours</small>
                  <small className="float-right text-danger">{x.price}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid banner">
        <div className="row h-100">
          <div className="col-lg p-lg-5 bg-danger text-white">
            <h2 className="font-weight-bold">E-Books</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="text-white">Learn more</a>
          </div>
          <div className="col-lg p-lg-5 bg-dark text-white">
            <h2 className="font-weight-bold">Creative approach</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="text-white">Learn more</a>
          </div>
          <div className="col-lg image">
          </div>
        </div>
      </div>

      <div className="container-fluid p-lg-5">
        <div className="row h-100">
          <div className="col-lg">
            <h2 className="font-weight-bold">Why choose us?</h2>
            <p>Many successful years of experience in the education make us leaders in this field</p>
          </div>
          <div className="col-lg">
            <div class="progress">
              <div class="progress-bar bg-danger w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Mentorship</p>
            <div class="progress">
              <div class="progress-bar bg-danger w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Education</p>
            <div class="progress">
              <div class="progress-bar bg-danger w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Learning</p>
            <div class="progress">
              <div class="progress-bar bg-danger w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Motivation</p>
          </div>
        </div>
      </div>

      <div className="container-fluid banner2">
        <div className="row h-100">
          <div className="col-lg-4 image">
          </div>
          <div className="col-lg p-lg-5 bg-danger text-white">
            <h2 className="font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>Someone on the internet</p>
          </div>
        </div>
      </div>

      <div className="container-fluid contact">
        <div className="row h-100 p-lg-5">
          <div className="col-lg align-self-center">
            <h2 className="font-weight-bold">Contact us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat erat, mattis a pellentesque id, fringilla vitae metus. Proin bibendum sodales congue.</p>
            <ul className="list-unstyled">
              <li>Location</li>
              <li>Phone number</li>
              <li>Hours</li>
            </ul>
          </div>
          <div className="col-lg align-self-center">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Name" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="inputAddress" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea rows="5" type="text" className="form-control" id="inputAddress2" placeholder="Message" />
              </div>
              <button type="submit" className="btn btn-danger">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row bg-dark p-lg-5 line">
          <div className="col-lg">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-white">Newsroom</a>
              </li>
              <li>
                <a href="#" className="text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-white">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-white">Dribbble</a>
              </li>
            </ul>
          </div>
          <div className="col-lg">
            <ul className="list-unstyled">
              <li>
                <small className="text-muted">Business:</small><br />
                <a href="#" className="text-white">contact.syandana@gmail.com</a><br />
                <a href="#" className="text-white">+62</a><br />
              </li>
              <br />
              <li>
                <small className="text-muted">© 2020 Syandsign. All rights reserved.</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
