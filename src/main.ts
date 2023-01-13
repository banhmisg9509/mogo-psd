import "./styles/reset.scss";
import "./styles/style.scss";

const toggleBtn = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

const wedoItems: NodeListOf<HTMLDivElement> =
  document.querySelectorAll<HTMLDivElement>(".wedo-item-header");

toggleBtn?.addEventListener("click", function () {
  menu?.classList.add("is-expand");
});

document.addEventListener("click", function (e: Event) {
  const target = e.target as HTMLElement;
  const { id } = target;
  if (id !== "menu" && id !== "toggle-menu" && !menu?.contains(target)) {
    menu?.classList.remove("is-expand");
  }
});

function expandWedoItem(item: HTMLDivElement) {
  item?.parentElement?.classList.add("is-expand");
}

wedoItems.forEach((item) => {
  item.addEventListener("click", function () {
    wedoItems.forEach((it) => {
      it.parentElement?.classList.remove("is-expand");
    });

    expandWedoItem(this);
  });
});

expandWedoItem(wedoItems[0]);

// slick slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      '<button class="slick-prev"><i class=" fa fa-chevron-left "></i></button>',
    nextArrow:
      '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // slide to anchor
  $(".header-menu-item").on("click", function () {
    const id = $(this).text().toLowerCase().trim();
    if (!id) return;

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#" + id).offset()?.top,
      },
      1000
    );
  });
});
