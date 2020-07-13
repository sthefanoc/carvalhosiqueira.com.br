import React, { useState } from "react";
import { css, cx } from "emotion"; 

const Quote = () => {
  const quotes = {
    0: {
      client: "Awesome Client, Acme Co",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum. Interdum nunc arcu interdum at adipiscing pellentesque.",
    },
    1: {
      client: "Sweet Client, Acme Inc.",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.",
    },
    2: {
      client: "Dope Client, Acme LLC",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum. Interdum nunc arcu interdum at adipiscing pellentesque.",
    },
    3: {
      client: "Cool Client, Acme LTD",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.",
    },
  }

  const [current, setCurrent] = useState(quotes[0])

  const [active, setActive] = useState(0)

  const handleSetClick = event => {
    setCurrent(quotes[event.target.getAttribute("data-quote")])
    setActive(event.target.getAttribute("data-quote"))
  }

  return (
    <section
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px auto;
        max-width: 700px;

        p {
          text-align: center;
          margin-bottom: 20px;
          color: #45454d;
        }
      `}
    >
      <p>{current.quote}</p>
      <p>{current.client}</p>
      <div
        className={css`
          display: flex;

          span {
            height: 20px;
            width: 20px;
            margin: 0 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          span::before {
            content: "";
            height: 6px;
            width: 6px;
            background-color: #d4d4d4;
            border-radius: 50%;
            transition: background-color 0.3s ease;
          }

          span:hover::before {
            background-color: #45454d;
          }

          span[data-quote="${active}"]::before {
            background-color: #45454d;
          }

        `}
      >
        {Object.keys(quotes).map(index => (
          <span
            onClick={event => handleSetClick(event)}
            data-quote={index}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Quote