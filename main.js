const gallery = document.querySelectorAll(".gallery .image"),
    previweBox = document.querySelector(".previwe-box"),
    previweImg = previweBox.querySelector("img"),
    closeIcon = previweBox.querySelector(".icon"),
    currentImg = previweBox.querySelector(".current-img"),
    totalImg = previweBox.querySelector(".total-img");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = () => {
            clickImgIndex = newIndex;
            console.log(i);

            function previwe() {
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previweImg.src = selectedImgUrl;
                // console.log(selectedImgUrl);
            }

            const prevBtn = document.querySelector(".prev")
            const nextBtn = document.querySelector(".next")

            if (newIndex == 0) {
                prevBtn.style.display = "none";
            }

            if (newIndex >= gallery.length - 1) {
                prevBtn.style.display = "none";
            }

            prevBtn.onclick = () => {
                newIndex--;
                if (newIndex == 0) {
                    previwe();
                    prevBtn.style.display = "none";
                } else {
                    previwe();
                    prevBtn.style.display = "block";

                }
            }

            nextBtn.onclick = () => {
                newIndex++;
                if (newIndex >= gallery.length - 1) {
                    previwe();
                    nextBtn.style.display = "none";
                } else {
                    previwe();
                    nextBtn.style.display = "block";
                }
            };

            previwe();
            previweBox.classList.add("show");

            closeIcon.onclick = () => {
                newIndex = clickImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previweBox.classList.remove("show");
            };
        };
    }
};