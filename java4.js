function HideParagraphs()
{
    $(document).ready(function () {
        $("p").hide("slow");
    })
}

function ShowParagraphs()
{
    $(document).ready(function () {
        $("p").show("slow");
    })
}

function HideAllTags(TagToHide)
{
    $(TagToHide).hide("slow").fadeOut('slow');
}

function ShowAllTags(TagToHide)
{
    $(TagToHide).show("slow").fadeIn('slow');
}

function HideAll()
{
    WhatToHide = document.getElementById("ItemToUse").value;
    $(WhatToHide).hide("slow");
}

function ShowAll()
{
    WhatToShow = document.getElementById("ItemToUse").value;
    $(WhatToShow).show("slow");
}
