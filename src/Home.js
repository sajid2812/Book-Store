import React from "react";
import "./Home.css";
import Product from "./Product";
import fantasy_novel from "./fantasy_novel.png";
import Footer from "./Footer";
import girl_image from "./home_image.png";

function Home() {
  return (
    <div className="home__container">
      <div className="home__img">
        <div className="home__imgTitle">
          <h1>Welcome to My Book Store</h1>
        </div>
        <img
          className="home__image"
          src={girl_image}
          alt=""
        />
      </div>
      <div className="home__row">
        <h2>Trending Books</h2>
        <div className="home__rowProduct">
          <Product
            id={1}
            title="A Love Hate Thing"
            price={1485}
            image="https://images.isbndb.com/covers/60/41/9781335016041.jpg"
            author="Whitney D. Grandison"
            rating={4}
          />
          <Product
            id={2}
            title="The Subtle Art of Not Giving a F*ck"
            price={334}
            image="https://m.media-amazon.com/images/I/814jC+rODgL._AC_UY327_FMwebp_QL65_.jpg"
            author="Mark Manson"
            rating={5}
          />
          <Product
            id={3}
            title="The Rudest Book Ever"
            price={234}
            image="https://m.media-amazon.com/images/I/81U3+6n3s1L._AC_UY327_FMwebp_QL65_.jpg"
            author="Shwetabh Gangwar"
            rating={4}
          />
          <Product
            id={4}
            title="The Hard Thing About Hard Things"
            price={465}
            image="https://rukminim1.flixcart.com/image/416/416/ki6bgcw0-0/book/3/k/y/the-hard-thing-about-hard-things-original-imafyf4vz6pmkhyu.jpeg?q=70"
            author="Ben Horowitz"
            rating={3}
          />
          <Product
            id={5}
            title="Brief Answers To The Big Questions"
            price={426}
            image="https://m.media-amazon.com/images/I/81-aBZSCJWL._AC_UY327_FMwebp_QL65_.jpg"
            author="Stephen Hawking"
            rating={4}
          />
          <Product
            id={6}
            title="The Lean Startup"
            price={622}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            author="Eric Ries"
            rating={5}
          />
          <Product
            id={7}
            title="Everything Is F*cked"
            price={108}
            image="https://m.media-amazon.com/images/I/71NUA75JgrL._AC_UY327_FMwebp_QL65_.jpg"
            author="Mark Manson"
            rating={4}
          />
          <Product
            id={8}
            title="Zero To One"
            price={30.99}
            image="https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UY327_FMwebp_QL65_.jpg"
            author="Peter Thiel"
            rating={5}
          />
          <Product
            id={9}
            title="Atomic Habits"
            price={482}
            image="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg"
            author="James Clear"
            rating={4}
          />
          <Product
            id={10}
            title="Attitude is Everything"
            price={141}
            image="https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg"
            author="Jeff Keller"
            rating={5}
          />
        </div>
      </div>
      <div className="second__row">
        <div className="second__rowProduct">
          <h2>Choose By Genre</h2>
          <div className="genre__row">
            <div className="genre__rowImg">
              <img src="https://m.media-amazon.com/images/I/51CyNf+aXHL._AC_UY327_FMwebp_QL65_.jpg"></img>
              <h5>Horror</h5>
            </div>
            <div className="genre__rowImg">
              <img src="https://m.media-amazon.com/images/I/81tSFxicufL._AC_UY327_FMwebp_QL65_.jpg"></img>
              <h5>Mystery</h5>
            </div>
            <div className="genre__rowImg">
              <img src="https://m.media-amazon.com/images/I/91t5-Juqt9L._AC_UY327_FMwebp_QL65_.jpg"></img>
              <h5>Fantasy</h5>
            </div>
          </div>
          <div className="genre__row">
            <div className="genre__rowImg">
              <img src="https://m.media-amazon.com/images/I/41n1edvVlLL._AC_UY327_FMwebp_QL65_.jpg"></img>
              <h5>Biography</h5>
            </div>
            <div className="genre__rowImg">
              <img src="https://m.media-amazon.com/images/I/816rNhXOB8L._AC_UY327_FMwebp_QL65_.jpg"></img>
              <h5>Sci-Fi</h5>
            </div>
            <div className="genre__rowImg">
              <img src="https://m.media-amazon.com/images/I/81JhP-6yT2L._AC_UY327_FMwebp_QL65_.jpg"></img>
              <h5>Crime</h5>
            </div>
          </div>
        </div>
        <div className="second__rowProduct">
          <h2>Premium</h2>
          <img className="second_rowProductImage" src={fantasy_novel}></img>
          <div className="genre__row">
            <div className="genre__rowImg">
              <img src="https://m.media-amazon.com/images/I/A1-tHldaTIL._AC_UY327_FMwebp_QL65_.jpg"></img>
            </div>
            <div className="genre__rowImg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkguxgMknnN5TdzJvihFHGGArqEfVj9bL05-BWzECm6U1t4Dbi"></img>
            </div>
            <div className="genre__rowImg">
              <img src="https://m.media-amazon.com/images/I/910ityjoncL._AC_UY327_FMwebp_QL65_.jpg"></img>
            </div>
          </div>
        </div>
        <div className="second__rowComics">
          <h2>Comics</h2>
          <div className="comics">
            <div className="genre__rowImg">
              {/* first column */}
              <img src="https://m.media-amazon.com/images/I/91BTZdo8jIL._AC_UY327_FMwebp_QL65_.jpg"></img>
              <img src="https://i.annihil.us/u/prod/marvel/i/mg/3/70/4bc353d839901/portrait_uncanny.jpg"></img>
            </div>
            <div className="genre__rowImg">
              {/* second column */}
              <img src="https://m.media-amazon.com/images/I/91YGjm9FDnL._AC_UL480_FMwebp_QL65_.jpg"></img>
              <img src="https://m.media-amazon.com/images/I/9129nLYmoFL._AC_UY327_FMwebp_QL65_.jpg"></img>
            </div>
            <div className="genre__rowImg">
              {/* third column */}
              <img src="https://i.annihil.us/u/prod/marvel/i/mg/f/50/56bb5ec28dde1/portrait_uncanny.jpg"></img>
              <img src="https://i.annihil.us/u/prod/marvel/i/mg/2/90/61ae1cc8ed9ee/portrait_uncanny.jpg"></img>
            </div>
          </div>
          <button>See All Collections</button>
        </div>
        <div className="second__rowProduct authors">
          <h2>Search By Authors</h2>
          <div className="genre__row">
            <div className="genre__rowImg">
              <img src="https://media.gettyimages.com/photos/author-jk-rowling-arrives-at-the-rfk-ripple-of-hope-awards-at-new-picture-id1193602799?k=20&m=1193602799&s=612x612&w=0&h=kTGdRzJjum2LZMU9GaxbS9xLagbzj9jqAa572pXVqO0="></img>
              <h5>J.K. Rowling</h5>
            </div>
            <div className="genre__rowImg">
              <img src="https://media.gettyimages.com/photos/outstanding-drama-series-winner-george-r-r-martin-poses-in-the-press-picture-id1035234310?k=20&m=1035234310&s=612x612&w=0&h=T835wCwts8wD0N9um3aZrestEmKiYvRPFon6877RJTU="></img>
              <h5>George R.R. Martin</h5>
            </div>
            <div className="genre__rowImg">
              <img src="https://media.gettyimages.com/photos/stephen-hawking-attends-the-ee-british-academy-film-awards-at-the-picture-id463030972?k=20&m=463030972&s=612x612&w=0&h=IjDpKun_lrF-na03kEWO-Him0MSZETDYGJDjA146TB8="></img>
              <h5>Stephen Hawking</h5>
            </div>
          </div>
          <div className="genre__row">
            <div className="genre__rowImg">
              <img src="https://media.gettyimages.com/photos/author-paulo-coelho-attends-paulo-coelhos-the-experimential-witch-red-picture-id92088020?k=20&m=92088020&s=612x612&w=0&h=a2pI192NDtbXA4vwIWcFzUO08wfBIfVWIPHzbFLRlYA="></img>
              <h5>Paulo Coelho</h5>
            </div>
            <div className="genre__rowImg">
              <img src="http://www.chetanbhagat.com/wp-content/uploads/2018/08/IMG_2202-768x1152.jpg"></img>
              <h5>Chetan Bhagat</h5>
            </div>
            <div className="genre__rowImg">
              <img src="https://media.gettyimages.com/photos/peter-thiel-cofounder-of-paypal-inc-stands-for-a-photograph-before-a-picture-id455529420?k=20&m=455529420&s=612x612&w=0&h=Bs1sN9E-hnl73VMWegyP_1VKVTSEYC-8hE7ZlgIUafM="></img>
              <h5>Peter Thiel</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="third__row">
        <h2>Best Sellers</h2>
        <div className="third__rowProduct">
          <Product
            id={8}
            title="A Tale Of Two Cities"
            price={1421}
            image="https://m.media-amazon.com/images/I/71e8u8xW57L._AC_UY327_FMwebp_QL65_.jpg"
            author="Charles Dickens"
            rating={4}
          />
          <Product
            id={9}
            title="Harry Potter and the Philosopher's Stone"
            price={298}
            image="https://m.media-amazon.com/images/I/910ityjoncL._AC_UY327_FMwebp_QL65_.jpg"
            author="J.K. Rowling"
            rating={5}
          />
          <Product
            id={10}
            title="The Hobbit"
            price={274}
            image="https://m.media-amazon.com/images/I/41g-Zs8nzlL._AC_UY327_FMwebp_QL65_.jpg"
            author="J.R.R. Tolkien"
            rating={5}
          />
          <Product
            id={11}
            title="The Da Vinci Code"
            price={1267}
            image="https://m.media-amazon.com/images/I/81jtrIKJd2L._AC_UY327_FMwebp_QL65_.jpg"
            author="Dan Brown"
            rating={4}
          />
          <Product
            id={12}
            title="The Alchemist"
            price={228}
            image="https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg"
            author="Paulo Coelho"
            rating={5}
          />
          <Product
            id={13}
            title="Charlotte's Web"
            price={228}
            image="https://m.media-amazon.com/images/I/91YS0h1kz5L._AC_UY327_FMwebp_QL65_.jpg"
            author="E.B. White"
            rating={4}
          />
          <Product
            id={14}
            title="The Catcher In The Rye"
            price={290}
            image="https://m.media-amazon.com/images/I/41DDmPoaupL._AC_UY327_FMwebp_QL65_.jpg"
            author="J.D. Salinger"
            rating={4}
          />
          <Product
            id={15}
            title="And Then There Were None"
            price={166}
            image="https://m.media-amazon.com/images/I/81IVXtChknL._AC_UY327_FMwebp_QL65_.jpg"
            author="Agatha Christie"
            rating={4}
          />
          <Product
            id={16}
            title="The Dream Of The Red Chamber"
            price={950}
            image="https://m.media-amazon.com/images/I/81UjsCGC6rL._AC_UY327_FMwebp_QL65_.jpg"
            author="Cao Xueqin"
            rating={4}
          />
          <Product
            id={16}
            title="She: A History Of Adventure"
            price={893}
            image="https://m.media-amazon.com/images/I/818Jpr8kF9L._AC_UY327_FMwebp_QL65_.jpg"
            author="H. Rider Haggard"
            rating={4}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
