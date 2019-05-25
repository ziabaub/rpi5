import $ from 'jquery';
import {Component} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import {toast} from 'react-toastify';


class newsapi extends Component {
    constructor() {
        super(1);
    }

    initializeInput(value) {

        let url = "https://newsapi.org/v2/top-headlines?q=news&country=us&category=business&apiKey=261f191c064f425baafde212648635d8";

        let count = 0;

        $(document).ready(function () {

            $("#getMore").hide();
            if (value === 'news') {
                getData(url);
            } else {
                url = "https://newsapi.org/v2/top-headlines?q=" + value + "&country=us&category=business&apiKey=261f191c064f425baafde212648635d8";
                getData(url);
            }

            $("#getMore").on("click", function (e) {
                e.preventDefault();
                getData(url);
            });

            $("#searchBtn").on("click", function (e) {
                e.preventDefault();// try do not show the user that we reload the page
                count = 0;
                let query = $("#searchquery").val(); // get info from input text field
                url = "https://newsapi.org/v2/top-headlines?q=" + value + "&country=us&category=business&apiKey=261f191c064f425baafde212648635d8";
                //console.log(url);
                if (query !== "") {
                    getData(url);
                } else {
                    window.Materialize.toast({ // framework
                        html: "input can't be empty",
                        classes: 'red'
                    });
                }
            });

        });


        function getData(url) {
            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",

                beforeSend: function () {
                    $("#loader").show();
                },

                complete: function () {
                    $("#loader").hide();
                    $("#getMore").show();
                },
                success: function (data) {

                    let latestNews = data.articles;
                    let output = "";
                    output = printFive(latestNews);
                    if (output !== "") {

                        $("#newsResults").html(output);
                        toast({ // framework
                            html: "here we go !!!",
                            classes: 'green'
                        });

                    } else {
                        //   $("#newsResults").html("");
                        toast({ // framework
                            html: "This news isn't available",
                            classes: 'red'
                        });
                    }
                },

                error: function () {
                    //  $("#newsResults").html("");
                    toast({ // framework
                        html: "error found ",
                        classes: 'red'
                    });
                }

            })


        }

        function printFive(latestNews) {
            count += 5;
            let output = "";
            for (let i in latestNews) {// i ude `` so do not need to always concatenate string ++
                output +=
                    `
                        <h4 style=" width: 800px ; text-align: justify">${latestNews[i].title}</h4>
                        <img src="${latestNews[i].urlToImage}"  class="responsive-img">
                        <p style=" width: 600px ; text-align: justify">${latestNews[i].description}</p>
                        <p style=" width: 600px ; text-align: justify">${latestNews[i].content}</p>
                        <p>Published on : ${latestNews[i].publishedAt}</p>
                        <a href="${latestNews[i].url}" class="btn">Read more</a>
                        `;
                if (i >= count - 1) {
                    break;
                }
                if (count === 19) {
                    count = 0;
                }
            }
            return output;
        }
    }
}

export default newsapi;