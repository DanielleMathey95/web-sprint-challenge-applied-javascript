const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
    //Creating Elements Here
  const headerContainer = document.createElement("div");
  const dateSpan = document.createElement("span");
  const title = document.createElement("h1");
  const temperature = document.createElement("span");

    //Classes Applied Here
  headerContainer.classList.add("header");
  dateSpan.classList.add("date");
  temperature.classList.add("temp");

    //AppendChild Here
    headerContainer.appendChild(dateSpan);
    headerContainer.appendChild(title);
    headerContainer.appendChild(temperature);

    //TextContent Here
    dateSpan.textContent = date;
    title.textContent = title;
    temperature.textContent = temp;

    return headerContainer;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let headContainer = document.querySelector(selector);
  headContainer.append(Header('The Lambda Times', '1/23/2021', '46F'))
}

export { Header, headerAppender }
