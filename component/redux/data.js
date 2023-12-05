import { useEffect } from "react";

export const dataPost = async() =>{
        await fetch("https://6554c20c63cafc694fe6e77d.mockapi.io/post", {
          method: "GET",
          headers: { "content-type": "application/json" },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            // handle error
          })
          .then((tasks) => {})
          .catch((error) => {
            // handle error
          });
}
