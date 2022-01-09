import React from "react";
import "./Details.css";
import { useStateValue } from "./StateProvider";

function Details() {
  const [{ user, book }, dispatch] = useStateValue();



  const pleaseSignIn = () => {
    alert("Please Register or Sign In");
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: book.id,
        title: book.title,
        image: book.image,
        author: book.author,
        price: book.price,
        rating: book.rating,
      },
    });
  };

  return book ?( 
    <>
      <div className="details">
        <div className="product__details">
          <div className="product__detailsImg">
            <img className="product__detailsImage" src={book.image} alt="" />
          </div>
          <div className="product__detailsInfo">
            <h2>{book.title}</h2>
            <h5>
              <span>by</span> {book.author}
            </h5>
            <div className="product__detailsRating">
              {Array(book.rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            <h3 className="product__detailsInfoPrice">₹{book.price}</h3>
            <button onClick={user ? addToBasket : pleaseSignIn}>
              Add to basket
            </button>
          </div>
        </div>
        <div className="product__detailsSummary">
          <h3>Summary</h3>
          <p>
            When they're stuck under one roof, the house may not be big enough
            for their hate or their love. When Tyson Trice finds himself tossed
            into the affluent coastal community of Pacific Hills, he's ready for
            the questions, the stares and the feeling of not belonging in the
            posh suburb. Not that he cares. After recovering from being shot and
            surviving the mean streets of Lindenwood, he doesn't care about
            anyone or anything. He doesn't even care how the rest of his life
            will play out.
            <br></br>
            <br></br>
            In Pacific Hills, image is everything. Something that, as the
            resident golden girl, Nandy Smith knows all too well. She's spent
            most of her life building the pristine image it takes to fit in.
            After learning that her parents are taking in a teen boy, Nandy
            fears her summer plans, as well as her reputation, will go up in
            flames. It's the start of summer vacation, and the last thing Nandy
            needs is some juvenile delinquent from the Wood crashing into her
            world.
          </p>
        </div>
      </div>
      <div className="product__description">
        <div className="product__author review">
          <h3>Review</h3>
          <p>
            "Emotional, gripping love story! I couldn't put it down!" -- "Simone
            Elkeles, New York Times bestselling author"
          </p>
        </div>
        <div className="product__author">
          <h3>About The Author</h3>
          <p>
            Whitney D. Grandison is an American young adult fiction writer. Her
            success on Wattpad has awarded her not only the title of Wattpad
            Star, but also the ability to work professionally for promotional
            campaigns for feature films such as Beyond the Lights and The Glass
            Castle. When she is not busy working on her next YA drama, she can
            be found obsessing over John Hughes classics, binge-watching Korean
            dramas or rooting for happy endings as she devours the latest YA
            release. Whitney currently lives in Akron, Ohio.
          </p>
        </div>
      </div>
    </>
  ):<div className="alternate"><h1>Please Select A Book</h1></div>;
}

export default Details;
