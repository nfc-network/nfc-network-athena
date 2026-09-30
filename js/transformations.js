/* =====================================================
   ATHENA TRANSFORMATIONS
   BEFORE / AFTER SWITCHER
   ===================================================== */


/*
  Find every transformation box
  on the page.
*/

const transformationBoxes =
  document.querySelectorAll(".comparison-box");


/*
  Go through every transformation box.
*/

transformationBoxes.forEach((box) => {

  /*
    Find the BEFORE photo
    inside this particular box.
  */

  const beforePhoto =
    box.querySelector(".before-photo");


  /*
    Find the AFTER photo
    inside this particular box.
  */

  const afterPhoto =
    box.querySelector(".after-photo");


  /*
    Find the BEFORE / AFTER label.
  */

  const photoLabel =
    box.querySelector(".photo-label");


  /*
    The transformation starts
    with the BEFORE photo.
  */

  let showingBefore = true;


  /*
    Switch the photos every 2.5 seconds.
  */

  setInterval(() => {


    /* ==============================
       SHOW AFTER
       ============================== */

    if (showingBefore) {

      beforePhoto.classList.remove("active-photo");

      afterPhoto.classList.add("active-photo");

      photoLabel.textContent = "AFTER";

    }


    /* ==============================
       SHOW BEFORE
       ============================== */

    else {

      afterPhoto.classList.remove("active-photo");

      beforePhoto.classList.add("active-photo");

      photoLabel.textContent = "BEFORE";

    }


    /*
      Reverse the current state.
    */

    showingBefore = !showingBefore;

  }, 2500);

});