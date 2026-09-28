$(document).ready(function () {
    $("#company-tab").removeClass("active show");
    $("#directors-tab").removeClass("active show");
    $("#charges-tab").removeClass("active show");
    $("#reports-tab").removeClass("active show");

    $("#bookmarks-tab").removeClass("active show");
    $("#aboutus-tab").removeClass("active show");
    $("#review-tab").removeClass("active show");
    $("#notes-tab").removeClass("active show");
    $("#timeline-tab").removeClass("active show");//by dikshant

    $("#aboutuspanel").removeClass("active show");
    $("#reviewpanel").removeClass("active show");
    $("#notespanel").removeClass("active show");
    $("#bookmarkspanel").removeClass("active show");

    var LoadedPage = $("#hdnLoadedPage").val();

    if (LoadedPage == "CompanyMaster") {
        if ($("#company-tab").hasClass("active") == false) {
            $("#company-tab").addClass("active show");
            $("#companypanel").addClass("active show");
        }
    }
    else if (LoadedPage == "DirectorMaster") {
        if ($("#directors-tab").hasClass("active") == false) {
            $("#directors-tab").addClass("active show");
            $("#directorspanel").addClass("active show");
        }
    }
    else if (LoadedPage == "ChargesMaster") {
        if ($("#charges-tab").hasClass("active") == false) {
            $("#charges-tab").addClass("active show");
            $("#chargespanel").addClass("active show");
        }
    }
    else if (LoadedPage == "CompanyDocuments") {
        if ($("#documents-tab").hasClass("active") == false) {
            $("#documents-tab").addClass("active show");
            $("#documentspanel").addClass("active show");
        }
    }
    else if (LoadedPage == "CompanyReports") {
        if ($("#reports-tab").hasClass("active") == false) {
            $("#reports-tab").addClass("active show");
            $("#reportspanel").addClass("active show");

            LoadReportsData1();
        }
    }
    else if (LoadedPage == "CompanyBookmarks") {
        if ($("#bookmarks-tab").hasClass("active") == false) {
            $("#bookmarks-tab").addClass("active show");
            $("#bookmarkspanel").addClass("active show");

            PopulateBookmarksData();
        }
    }
    else if (LoadedPage == "CompanyAboutUs") {
        if ($("#aboutus-tab").hasClass("active") == false) {
            $("#aboutus-tab").addClass("active show");
            $("#aboutuspanel").addClass("active show");

            PopulateAboutUsData();
        }
    }
    else if (LoadedPage == "DirectorProfileOverview") {
        if ($("#directorsProfileOverivew-tab").hasClass("active") == false) {
            $("#directorsProfileOverivew-tab").addClass("active show");
            $("#directorProfilespanel").addClass("active show");
            $("#reportsnavigationContainer").hide();
        }
    }


    //else if (LoadedPage == "DirectorProfileReport")
    //{
    //    if ($("#ddirectorreports-tab").hasClass("active") == false) {
    //        $("#ddirectorreports-tab").addClass("active show");
    //        $("#reportspanel").addClass("active show");

    //    }



    //}
    else if (LoadedPage == "CompanyReviews") {
        if ($("#review-tab").hasClass("active") == false) {
            $("#review-tab").addClass("active show");
            $("#reviewpanel").addClass("active show");

            PopulateReviewData();
        }
    }
    else if (LoadedPage == "CompanyNotes") {
        if ($("#notes-tab").hasClass("active") == false) {
            $("#notes-tab").addClass("active show");
            $("#notespanel").addClass("active show");

            PopulateNotesData();
        }
    }
    else if (LoadedPage == "CompanyTimeline") {
        if ($("#timeline-tab").hasClass("active") == false) {
            $("#timeline-tab").addClass("active show");
            $("#timelinepanel").addClass("active show");

            ReadCompanyChangedData();
            //PopulateNotesData();
        }// by dikshant
    }


    isMobile = GetDevice();

    if (isMobile) {
        $("#btnMobileOrderNow").show();
        $("#hamburgerLinks").hide();
    }
    else {
        $("#hamburgerLinks").hide();
    }

    /*    UpdateCompany(false);*/

    var value = $('#navigationContentHolder_aDirectorLegal').val();
});

function GetDevice() {
    isMobile = false;
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;

        $("#btnMobileOrderNow").show();
    }
    return isMobile;
}
console.log("JS Loaded ✅");

$(".btnChargesNav").on("click", function () {
    var targetId = $(this).attr("data-target");
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});


$(".btnCompanyNav").on("click", function () {
    var targetId = $(this).attr("data-target");
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});



function OpenCompanyTab() {
    var CIN = $("#navigationContentHolder_hdnCIN").val();
    var CName = $("#navigationContentHolder_hdnCName").val();

    CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

    window.top.document.location.href = "/company/" + CName + "-" + CIN;

    return false;
}
//added by kalyan



function OpenDirectorReports(el) {

    var directorId = $("[id$='hdnDirID']").val();
    var directorDIN = $("[id$='hdnDIN']").val();
    var InstaUserID = $("[id$='hdnUID']").val();




    // hide overview tab panel
    $("#directorProfilespanel")
        .removeClass("show active")
        .hide();

    // show reports tab panel
    $("#reportspanel")
        .addClass("show active")
        .show();

    // highlight tab
    $("#companyTabs .nav-link").removeClass("active");
    $(el).addClass("active");


    InstaProduct = getDefaultProductDirectorReportToBeLoad();
    // load reports
    PopulateDirectorsReportData(directorId, directorDIN, InstaUserID, InstaProduct);
}

function getDefaultProductDirectorReportToBeLoad() {
    return "DirectorLegalReport";
}









function showSection(sectionId, el) {

    // always switch back to overview tab
    $("#reportspanel")
        .removeClass("show active")
        .hide();

    $("#directorProfilespanel")
        .addClass("show active")
        .show();

    // scroll smoothly
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    $("#directorsnavigationContainer").show();
    $("#reportsnavigationContainer").hide();

    // highlight clicked tab
    $("#companyTabs .nav-link").removeClass("active");
    $(el).addClass("active");
}


function OpenDirectorsTab() {

    var CIN = $("#navigationContentHolder_hdnCIN").val();
    var CName = $("#navigationContentHolder_hdnCName").val();

    CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

    window.top.document.location.href = "/company/" + CName + "-" + CIN + "/company-directors";

    return false;

}
function showLoginPopup() {
    swal({
        title: "Login Required",
        content: {
            element: "div",
            attributes: {
                innerHTML: `
                 <p style="font-size:18px; line-height:1.5; text-align:center;">
                    Please <strong>Login</strong> & Try Again to Update the Information.<br>
                    <a href="https://www.instafinancials.com/login.aspx"
                       style="color:#28a745; text-decoration:underline;">
                       Click Here to Login
                    </a>
                </p>
                `
            }
        },
        button: "OK"
    });

    setTimeout(() => {

        let title = document.querySelector(".swal-title");
        if (title) {
            if (title) {
                title.style.fontSize = "24px"; title.style.backgroundColor = "#023E8A";
                // blue background 
                title.style.color = "#fff"; // white text 
                title.style.padding = "12px"; // ribbon thickness 
                title.style.borderRadius = "0"; // square edges for full bar 
                title.style.display = "block"; // full width 
                title.style.width = "100%"; // stretch across popup 
                title.style.textAlign = "center"; // center the text 
                title.style.margin = "0"; // remove default margins 
            }
        }
        const footer = document.querySelector(".swal-footer");
        const okButton = document.querySelector(".swal-button--confirm");

        if (footer && okButton && !footer.querySelector(".register-link")) {

            // FORCE footer vertical layout
            footer.style.display = "flex";
            footer.style.flexDirection = "column";
            footer.style.alignItems = "center";
            footer.style.textAlign = "center";

            // Style OK button
            okButton.style.backgroundColor = "#023E8A";
            okButton.style.color = "#fff";
            okButton.style.marginBottom = "10px";

            // Create Register link
            const registerLink = document.createElement("a");
            registerLink.href = "https://www.instafinancials.com/accounts/Signup.aspx";
            registerLink.innerText = "Click Here to Register for Free";
            registerLink.className = "register-link";
            registerLink.target = "_blank";

            // Inline styles
            registerLink.style.display = "block";
            registerLink.style.marginTop = "8px";
            registerLink.style.color = "#023E8A";
            registerLink.style.textDecoration = "underline";
            registerLink.style.fontSize = "18px";
            registerLink.style.cursor = "pointer";

            footer.appendChild(registerLink);
        }

    }, 50);
}



function OpenChargesTab() {
    if ($('#navigationContentHolder_hdnUID').val() === "0" || $('#navigationContentHolder_hdnUID').val() === '') {
        showLoginPopup();
    }
    else {
        var CIN = $("#navigationContentHolder_hdnCIN").val();
        var CName = $("#navigationContentHolder_hdnCName").val();

        CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

        window.top.document.location.href = "/company/" + CName + "-" + CIN + "/company-charges";

        return false;
    }
}

function OpenDocumentsTab() {

    var CIN = $("#navigationContentHolder_hdnCIN").val();
    var CName = $("#navigationContentHolder_hdnCName").val();

    CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

    window.top.document.location.href = "/company/" + CName + "-" + CIN + "/company-documents";

    return false;
}

function OpenReportsTab() {
    if ($('#navigationContentHolder_hdnUID').val() === "0" || $('#navigationContentHolder_hdnUID').val() === '') {
        showLoginPopup();
    }
    else {
        var CIN = $("#navigationContentHolder_hdnCIN").val();
        var CName = $("#navigationContentHolder_hdnCName").val();

        CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

        window.top.document.location.href = "/company/" + CName + "-" + CIN + "/company-reports";

        return false;
    }
}

function OpenBookmarksTab() {
    if ($('#navigationContentHolder_hdnUID').val() === "0" || $('#navigationContentHolder_hdnUID').val() === '') {
        showLoginPopup();
    }
    else {
        var CIN = $("#navigationContentHolder_hdnCIN").val();
        var CName = $("#navigationContentHolder_hdnCName").val();

        CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

        window.top.document.location.href = "/company/" + CName + "-" + CIN + "/company-bookmarks";

        return false;
    }
}

//function OpenAboutUsTab() {
//    var CIN = $("#navigationContentHolder_hdnCIN").val();
//    var CName = $("#navigationContentHolder_hdnCName").val();

//    CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

//    window.top.document.location.href = "/company/" + CName + "-" + CIN + "/company-aboutus";

//    return false;
//}

//function OpenReviewTab() {
//    var CIN = $("#navigationContentHolder_hdnCIN").val();
//    var CName = $("#navigationContentHolder_hdnCName").val();

//    CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

//    window.top.document.location.href = "/company-reviews/" + CName + "-" + CIN;

//    return false;
//}

//function OpenNotesTab() {
//    var CIN = $("#navigationContentHolder_hdnCIN").val();
//    var CName = $("#navigationContentHolder_hdnCName").val();

//    CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

//    window.top.document.location.href = "/company-notes/" + CName + "-" + CIN;

//    return false;
//}

function OpenReports() {
    LoadReportsData();
    $('#companyTabs a[href="#reports"]').tab('show');
    return false;
}

//function OpenTimelineTab() {


//    var CIN = $("#navigationContentHolder_hdnCIN").val();
//    var CName = $("#navigationContentHolder_hdnCName").val();
//    //CName = CName.toLowerCase().replace(/'/g, '').replace(RegExp('[^0-9a-zA-Z-]', 'g'), '-').replace("--", "-");

//    //ReadCompanyChangedData();
//    window.top.document.location.href = "/company-timeline/" + CName + "-" + CIN;
//    $('#companyTabs a[href="#timeline"]').tab('show');
//    return false;
//}// by dikshant


function LoadReportsData1() {
    isMobile = GetDevice();

    if (isMobile) {
        $("#btnMobileOrderNow").show();
    }

    if (isMobile) {
        $(".nonMenu").addClass('hidden');
        $(".mobileOnly").removeClass('hidden');
    }
    else if (!isMobile && $('.i-insta__sidenav').hasClass('d-none')) {
        $(".nonMenu").removeClass('hidden');
        $(".mobileOnly").addClass('hidden');
    }
    else if (!isMobile && ($('.i-insta__sidenav').hasClass('d-none') == false)) {
        $(".nonMenu").addClass('hidden');
        $(".mobileOnly").addClass('hidden');
    }
}



function PopulateDirectorsReportData(directorId, directorDIN, InstaUserID, InstaProduct) {

    $.ajax({
        type: "POST",
        url: "/director/director-profile.aspx/PopulateReportsData",
        data: JSON.stringify({
            directorId: directorId,
            directorDIN: directorDIN,
            instaUserId: InstaUserID,
            instaproductID: InstaProduct
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (result) {

            var objJson = result.d;

            if (objJson && objJson.length > 0) {

                try {

                    $("#directorsnavigationContainer").hide();
                    $("#reportsnavigationContainer").show();

                    $("#directorProfilespanel").hide();
                    $("#OpenDirectorProfileOverViewContentHolder")
                        .removeClass("show active")
                        .hide();

                    $("#reportspanel")
                        .addClass("show active")
                        .show();

                    // Bind HTML
                    $("#UserProductsHolder").html(objJson[0]).show();
                    $("#ProductDescription").html(objJson[1]).show();
                    if (objJson.length == 3) {
                        var AvailableReports = objJson[2];
                        console.log(objJson[2]);

                        if (!AvailableReports.directorcreditreport)
                            $("#DirectorCreditReportRPT").css("color", "darkgrey");

                        if (!AvailableReports.directorlegalreport)
                            $("#DirectorLegalReportRPT").css("color", "darkgrey");

                    }






                } catch (e) {
                    console.error(e);
                }
            }
        },

        error: function (xhr) {
            console.error(xhr.responseText);
        }
    });
}


function DownLoadFileDirectorCreditReport(CompanyID, ReportType, UserOrderID, OrderDate, ProductName, ReportObj) {
    //if (ReportType == "InstaDocs") {
    //    var orderedOn = '01-01-1900';
    //    var tr = $(ReportObj).parent().parent();
    //    var td = tr.children();
    //    for (var i = 0; i < td.length; i++) {
    //        if ($(td[i]).hasClass('ordered')) {
    //            orderedOn = td[i].innerText.trim();
    //            break;
    //        }
    //    }
    //    DownloadInstaDocsPDF(CompanyID, ReportType, orderedOn);
    //}
    //else {

    ReportType = 'DirectorCreditReport';

    if (CompanyID != undefined && CompanyID > 0) {
        //if (ReportType != "InstaDocs") {
        var iframe;
        iframe = document.createElement('iframe');
        iframe.src = '../downloader.aspx?CompanyID=' + CompanyID + '&ReportType=' + ProductName + '&OrderedOn=' + OrderDate + '&MyOrderID=' + UserOrderID;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        //}
        //else {
        //    window.top.document.location.href = "../company/insta-docs.aspx?CID=" + CompanyID;
        //}
    }
    //}
}










function PopulateBookmarksData() {
    $("#btnMobileOrderNow").hide();

    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();

    if (UID > 0) {
        $.ajax({
            type: "POST",
            url: "/company/company-bookmarks.aspx/PopulateBookmarksData",
            data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson.length > 0) {
                    try {
                        $("#bmContainer1").hide();
                        $("#bmContainer2").show();

                        var CompanyBookmark;
                        var UserBookmarks;

                        if (objJson.length > 0) {
                            CompanyBookmark = objJson[0];
                            if (CompanyBookmark != null && CompanyBookmark != undefined) {
                                $("#bookmarksContentHolder_hdnUBID").val(CompanyBookmark.UserBookmarkID);
                                if (CompanyBookmark.IsCustomer) {
                                    $("#bookmarksContentHolder_chkCustomer").prop('checked', true);
                                }
                                if (CompanyBookmark.IsSupplier) {
                                    $("#bookmarksContentHolder_chkSupplier").prop('checked', true);
                                }
                                if (CompanyBookmark.IsCompetitor) {
                                    $("#bookmarksContentHolder_chkCompetitor").prop('checked', true);
                                }
                                if (CompanyBookmark.IsEmployer) {
                                    $("#bookmarksContentHolder_chkEmployer").prop('checked', true);
                                }
                                if (CompanyBookmark.IsOwnCompany) {
                                    $("#bookmarksContentHolder_chkOwnCompany ").prop('checked', true);
                                }
                                if (CompanyBookmark.IsGroupCompany) {
                                    $("#bookmarksContentHolder_chkGroupCompany").prop('checked', true);
                                }
                                if (CompanyBookmark.IsOthers) {
                                    $("#bookmarksContentHolder_chkOthers").prop('checked', true);
                                }
                            }
                        }
                        if (objJson.length > 1) {
                            UserBookmarks = objJson[1];
                            if (UserBookmarks != null && UserBookmarks != undefined) {
                                for (var i = 0; i < UserBookmarks.length; i++) {
                                    switch (i) {
                                        case 0:
                                            $("#bookmarksContentHolder_lblCustomers").text(UserBookmarks[i]);
                                            break;
                                        case 1:
                                            $("#bookmarksContentHolder_lblSuppliers").text(UserBookmarks[i]);
                                            break;
                                        case 2:
                                            $("#bookmarksContentHolder_lblCompetitors").text(UserBookmarks[i]);
                                            break;
                                        case 3:
                                            $("#bookmarksContentHolder_lblEmployers").text(UserBookmarks[i]);
                                            break;
                                        case 4:
                                            $("#bookmarksContentHolder_lblOwnCompanies").text(UserBookmarks[i]);
                                            break;
                                        case 5:
                                            $("#bookmarksContentHolder_lblGroupCompanies").text(UserBookmarks[i]);
                                            break;
                                        case 6:
                                            $("#bookmarksContentHolder_lblOthers").text(UserBookmarks[i]);
                                            break;
                                    }
                                }
                            }
                        }
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                    finally {

                        return false;
                    }
                }
                else if (objJson == false) {

                    return false;
                }
            },
            failure: function (response) {

                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    }
    else {
        $.ajax({
            type: "POST",
            url: "/company/company-bookmarks.aspx/PopulateBookmarksData",
            data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson.length > 0) {
                    try {
                        if (objJson.length > 0) {
                            $("#bookmarksContainer1")[0].innerHTML = objJson[0];
                            $("#bmContainer1").show();
                            $("#bmContainer2").hide();
                        }
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                    finally {

                        return false;
                    }
                }
                else if (objJson == false) {

                    return false;
                }
            },
            failure: function (response) {

                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    }
}

function PopulateAboutUsData() {
    $("#btnMobileOrderNow").hide();

    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();

    $.ajax({
        type: "POST",
        url: "/company/company-about-us.aspx/PopulateAboutUsData",
        data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson.length > 0) {
                try {
                    if (objJson.length > 0) {
                        $("#aboutUsHolder")[0].innerHTML = objJson[0];
                        $("#aboutUsBenefits")[0].innerHTML = objJson[1];
                    }
                }
                catch (Error) {
                    console.log(Error);
                }
                finally {
                    return false;
                }
            }
            else if (objJson == false) {
                return false;
            }
        },
        failure: function (response) {

            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function ClaimCompany() {
    var CID = $("#navigationContentHolder_hdnCID").val();

    $.ajax({
        type: "POST",
        url: "/company/company-about-us.aspx/ClaimCompany",
        data: "{CompanyID:" + JSON.stringify(CID) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson.length > 0) {
                try {
                    if (objJson.length > 0) {
                        $("#aboutUsHolder")[0].innerHTML = objJson;
                    }
                }
                catch (Error) {
                    console.log(Error);
                }
                finally {

                    return false;
                }
            }
            else if (objJson == false) {

                return false;
            }
        },
        failure: function (response) {

            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });

    return false;
}

function DirectorSelected() {
    $("#rowContact").removeClass('hidden');
    $("#rowValidate").removeClass('hidden');
}

function ValidateContact() {
    var MobileNo = $("#txtContactNo").val();
    var EncVal = $("#ddlDirectors").find(":selected")[0].attributes["encval"].value;

    if (MobileNo.length == 10) {
        $.ajax({
            type: "POST",
            url: "/company/company-about-us.aspx/VerifyMobileNo",
            data: "{MobileNo:" + JSON.stringify(MobileNo) + ",EncNo:" + JSON.stringify(EncVal) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson == "1") {
                    swal("Contact No. successfully validated.");
                    $("#blockVerify").removeClass('hidden');
                    return false;
                }
                else if (objJson.length == 10) {
                    swal("Validation failed, As per our records the mobile number is " + objJson);
                    return false;
                }
            },
            failure: function (response) {
                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    }
    else {
        swal("Kindly enter 10 digit mobile number.");
    }
    return false;
}

function GetVerificationOTP() {
    var MobileNo = $("#txtContactNo").val();
    $.ajax({
        type: "POST",
        url: "/company/company-about-us.aspx/GetVerificationOTP",
        data: "{MobileNo:" + JSON.stringify(MobileNo) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson == "Success") {
                swal("OTP successfully sent to the provided Mobile No.");
                return false;
            }
            else {
                swal("Unable to send the OTP, try after some time.");
                return false;
            }
        },
        failure: function (response) {
            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });

    return false;
}

function VerifyOTP() {
    var InstaOTP = $("#txtInstaOTP").val();

    $.ajax({
        type: "POST",
        url: "/company/company-about-us.aspx/VerifyOTP",
        data: "{InstaOTP:" + JSON.stringify(InstaOTP) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson == 1) {
                swal("Congratulation! You are now authorised to manage the content of this page.");
                LoadAboutUsData();
                return false;
            }
            else if (objJson == 0) {
                swal("Provided OTP is wrong. Try again.");
                return false;
            }
            else if (objJson == -1) {
                swal("Unable to verify, Kindly contact InstaSupport.");
                return false;
            }
        },
        failure: function (response) {
            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
    return false;
}

function UpdateAboutUs() {
    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();

    $.ajax({
        type: "POST",
        url: "/company/company-about-us.aspx/UpdateCompanyAboutUs",
        data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson.length > 0) {
                try {
                    $($("#companynavigationContainer")[0]).hide();
                    $($("#directorsnavigationContainer")[0]).hide();
                    $($("#reportsnavigationContainer")[0]).hide();
                    $($("#bookmarksnavigationContainer")[0]).hide();
                    $($("#chargesnavigationContainer")[0]).hide();
                    $($("#reviewnavigationContainer")[0]).hide();

                    $($("#aboutusnavigationContainer")[0]).show();

                    if (objJson.length > 0) {
                        $("#aboutUsHolder")[0].innerHTML = objJson;
                    }
                }
                catch (Error) {
                    console.log(Error);
                }
                finally {

                    return false;
                }
            }
            else if (objJson == false) {

                return false;
            }
        },
        failure: function (response) {

            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });

    return false;
}

function SaveAboutUsdetails() {
    var CID = $("#navigationContentHolder_hdnCID").val();

    var objAboutUs = {};
    objAboutUs.CompanyID = CID;
    objAboutUs.BrandName = $('#txtBrand').val();
    objAboutUs.Website = $('#txtWebsite').val();
    objAboutUs.Industry = $('#txtIndustry').val();
    objAboutUs.Overview = $('#txtCompanyOverview')[0].innerHTML;
    objAboutUs.Inspiration = $('#txtInspiration')[0].innerHTML;
    objAboutUs.Achievements = $('#txtAchievements')[0].innerHTML;
    objAboutUs.SalesPerson = $('#txtSalesPerson').val();
    objAboutUs.ContactNo = $('#txtContactNo').val();
    var productList = $(".productGroup");
    if (productList.length > 0) {
        for (var i = 0; i < productList.length; i++) {
            var product = productList[i];
            if (i == 0) {
                objAboutUs.Product1 = $(product)[0].children[1].value;
                objAboutUs.Description1 = $(product)[0].children[3].innerHTML;
            }
            else if (i == 1) {
                objAboutUs.Product2 = $(product)[0].children[1].value;
                objAboutUs.Description2 = $(product)[0].children[3].innerHTML;
            }
            else if (i == 2) {
                objAboutUs.Product3 = $(product)[0].children[1].value;
                objAboutUs.Description3 = $(product)[0].children[3].innerHTML;
            }
        }
    }

    $.ajax({
        type: "POST",
        url: "/company/company-about-us.aspx/InsertUpdateAboutUs",
        data: "{ObjectAboutUs:" + JSON.stringify(objAboutUs) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson == 1) {
                swal("AboutUs data successfully saved.");
                setTimeout(() => { LoadAboutUsData(); }, 1000);
            }
            else if (objJson == 0 || objJson == -1) {
                swal("Unable to save AboutUs data.");
            }
        },
        failure: function (response) {
            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
    return false;
}

function MakeEditable(object) {
    $(object).attr('contenteditable', 'true');
    return false;
}

function PopulateReviewData() {
    $("#btnMobileOrderNow").hide();

    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();

    $.ajax({
        type: "POST",
        url: "/company/company-reviews.aspx/PopulateReviewData",
        data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson.length > 0) {
                try {
                    if (objJson.length > 0) {
                        $("#reviewHolder")[0].innerHTML = objJson[0];
                    }
                    if (objJson.length > 1) {
                        $("#reviewBenefits")[0].innerHTML = objJson[1];
                    }
                }
                catch (Error) {
                    console.log(Error);
                }
                finally {
                    return false;
                }
            }
            else if (objJson == false) {

                return false;
            }
        },
        failure: function (response) {
            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
    return false;
}

function ReviewCompany(TYP) {

    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();

    if (UID > 0) {
        $.ajax({
            type: "POST",
            url: "/company/company-reviews.aspx/ReviewCompany",
            data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + ",ReviewType:" + JSON.stringify(TYP) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson.length > 0) {
                    try {
                        if (objJson.length > 0) {
                            $("#reviewHolder")[0].innerHTML = objJson[0];
                            $("#reviewBenefits")[0].innerHTML = objJson[1];
                        }
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                    finally {

                        return false;
                    }
                }
                else if (objJson == false) {

                    return false;
                }
            },
            failure: function (response) {
                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    }
    else {
        swal("Kindly Login to review.")
    }
    return false;
}

function SetSelectColor(obj) {
    var parent = obj.parentElement;
    var childSpanList = parent.children;
    var childCount = obj.id[obj.id.length - 1];
    for (var i = 0; i < 5; i++) {
        if (i < childCount) {
            if ($(childSpanList[i]).hasClass('selected') == false) {
                $(childSpanList[i]).addClass('selected');
                $(childSpanList[i]).css("color", "#023E8A");
            }
        }
        else {
            if ($(childSpanList[i]).hasClass('selected') == true) {
                $(childSpanList[i]).removeClass('selected');
                $(childSpanList[i]).css("color", "#ddd");
            }
        }
    }
    return false;
}

function SaveCustomerRatingsAndReview() {
    var CustRatings = {};
    var rating = 0;
    var CRatings = $(".CRating");
    if (CRatings != undefined && CRatings.length > 0) {
        for (var i = 0; i < CRatings.length; i++) {
            rating = 0;
            var childSpans = CRatings[i].children;
            for (var j = 0; j < 5; j++) {
                if ($(childSpans[j]).hasClass('selected')) {
                    rating = rating + 1;
                }
            }
            if (CRatings[i].id == 'CRPQ')
                CustRatings.ProductQuality = rating;
            else if (CRatings[i].id == 'CRPC')
                CustRatings.CostOfProduct = rating;
            else if (CRatings[i].id == 'CRPD')
                CustRatings.ProductDelivery = rating;
            else if (CRatings[i].id == 'CRSQ')
                CustRatings.SupportQuality = rating;
            else if (CRatings[i].id == 'CRSL')
                CustRatings.SatisfactionLevel = rating;
        }
    }

    var customerReview = $("#txtCustomerReview")[0].innerHTML;
    CustRatings.CustomerReview = customerReview;


    $.ajax({
        type: "POST",
        url: "/company/company-reviews.aspx/InsertUpdateCustomerRating",
        data: "{CustomerRating:" + JSON.stringify(CustRatings) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson == 1) {
                swal("Customer rating and review is successfully updated.")

                ReviewCompany('Customer');
            }
            else {
                swal("Unable to update customer rating and review.")
            }
        },
        failure: function (response) {
            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function SaveSupplierRatingsAndReview() {
    var SupplierRatings = {};
    var rating = 0;
    var SRatings = $(".SRating");
    if (SRatings != undefined && SRatings.length > 0) {
        for (var i = 0; i < SRatings.length; i++) {
            rating = 0;
            var childSpans = SRatings[i].children;
            for (var j = 0; j < 5; j++) {
                if ($(childSpans[j]).hasClass('selected')) {
                    rating = rating + 1;
                }
            }
            if (SRatings[i].id == 'SREB')
                SupplierRatings.EaseOfBusiness = rating;
            else if (SRatings[i].id == 'SRTP')
                SupplierRatings.OnTimePayment = rating;
            else if (SRatings[i].id == 'SRBP')
                SupplierRatings.OnboardingProcess = rating;
            else if (SRatings[i].id == 'SRNC')
                SupplierRatings.NegotiationsAndContract = rating;
            else if (SRatings[i].id == 'SRSL')
                SupplierRatings.SatisfactionLevel = rating;
        }
    }

    var supplierReview = $("#txtSupplierReview")[0].innerHTML;
    SupplierRatings.SupplierReview = supplierReview;


    $.ajax({
        type: "POST",
        url: "/company/company-reviews.aspx/InsertUpdateSupplierRating",
        data: "{SupplierRating:" + JSON.stringify(SupplierRatings) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson == 1) {
                swal("Supplier rating and review is successfully updated.")
            }
            else {
                swal("Unable to update supplier rating and review.")
            }
        },
        failure: function (response) {
            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function SaveEmployeeRatingsAndReview() {
    var EmployeeRatings = {};
    var rating = 0;
    var ERatings = $(".ERating");
    if (ERatings != undefined && ERatings.length > 0) {
        for (var i = 0; i < ERatings.length; i++) {
            rating = 0;
            var childSpans = ERatings[i].children;
            for (var j = 0; j < 5; j++) {
                if ($(childSpans[j]).hasClass('selected')) {
                    rating = rating + 1;
                }
            }
            if (ERatings[i].id == 'ERWC')
                EmployeeRatings.WorkCulture = rating;
            else if (ERatings[i].id == 'ERCP')
                EmployeeRatings.CareerProgression = rating;
            else if (ERatings[i].id == 'ERTD')
                EmployeeRatings.TrainingAndDevelopment = rating;
            else if (ERatings[i].id == 'ERWL')
                EmployeeRatings.WorkLifeBalance = rating;
            else if (ERatings[i].id == 'EROB')
                EmployeeRatings.OverAllBenefits = rating;
            else if (ERatings[i].id == 'ERSL')
                EmployeeRatings.SatisfactionLevel = rating;
            else if (ERatings[i].id == 'ERRO')
                EmployeeRatings.RecommendOthers = rating;
        }
    }

    var employeeReview = $("#txtEmployeeReview")[0].innerHTML;
    EmployeeRatings.EmployeeReview = employeeReview;


    $.ajax({
        type: "POST",
        url: "/company/company-reviews.aspx/InsertUpdateEmployeeRating",
        data: "{EmployeeRating:" + JSON.stringify(EmployeeRatings) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson == 1) {
                swal("Employee rating and review is successfully updated.")
            }
            else {
                swal("Unable to update employee rating and review.")
            }
        },
        failure: function (response) {
            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function ShowAllReviews(TYP) {

    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();

    if (UID > 0) {
        $.ajax({
            type: "POST",
            url: "/company/company-reviews.aspx/ShowAllReviews",
            data: "{CompanyID:" + JSON.stringify(CID) + ",ReviewType:" + JSON.stringify(TYP) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson.length > 0) {
                    try {
                        if (objJson.length > 0) {
                            $("#reviewHolder")[0].innerHTML = objJson;
                        }
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                    finally {
                        return false;
                    }
                }
                else if (objJson == false) {

                    return false;
                }
            },
            failure: function (response) {
                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    }
    else {
        swal("Kindly Login to see all reviews.")
    }
    return false;
}

function PopulateNotesData() {
    $("#btnMobileOrderNow").hide();

    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();

    $.ajax({
        type: "POST",
        url: "/company/company-notes.aspx/PopulateMyNotes",
        data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson.length > 0) {
                try {
                    if (objJson.length > 0) {
                        $("#noteHolder")[0].innerHTML = objJson[0];
                        $("#noteBenefits")[0].innerHTML = objJson[1];
                    }
                }
                catch (Error) {
                    console.log(Error);
                }
                finally {

                    return false;
                }
            }
            else if (objJson == false) {

                return false;
            }
        },
        failure: function (response) {

            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function EditMyNotes() {
    $("#MyNote1Content").css("border", "solid 2px #000");
    $("#btnEditNotes").addClass("hidden");
    $("#btnUpdateNotes").removeClass("hidden");
    return false;
}

function UpdateMyNotes() {
    var CID = $("#navigationContentHolder_hdnCID").val();
    var Note1 = $("#MyNote1Content")[0].innerHTML;
    var Note2 = "";

    $.ajax({
        type: "POST",
        url: "/company/company-notes.aspx/InsertUpdateMyNotes",
        data: "{CompanyID:" + JSON.stringify(CID) + ",Note1:" + JSON.stringify(Note1) + ",Note2:" + JSON.stringify(Note2) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson == 1) {
                swal("Company note is successfully saved.");
                $("#btnEditNotes").removeClass("hidden");
                $("#btnUpdateNotes").addClass("hidden");
                $("#MyNote1Content").css("border", "none");
            }
            else {
                swal("Unable to save company notes.")
            }
        },
        failure: function (response) {
            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
    $("#NoteControl").hide();
    $("#MyNotesHolder").addClass("hidden");
}

function OrderCompany() {

    //$.ajax({
    //    type: "POST",
    //    url: "/director/director-master.aspx/clearSessionInstaReporttype",
    //    data: "{}",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (result) {
    //    },
    //    failure: function (response) {
    //        return false;
    //    }
    //});
    var UserstatusID = 0;

    if (document.getElementById('hdnStatusID') != null && document.getElementById('hdnStatusID') != undefined)
        UserstatusID = document.getElementById('hdnStatusID').value;

    // if (UserstatusID == 1) {

    var LoadedPage = $("#hdnLoadedPage").val();

    if (LoadedPage == undefined) {
        LoadedPage = $("#LLPContentHolder_hdnLoadedPage").val();
    }

    if (LoadedPage == "CompanyMaster") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/");
    }
    else if (LoadedPage == "LLPMaster") {
        window.top.document.location.href = window.location.pathname.replace("/LLP/", "/orders/");
    }
    else if (LoadedPage == "DirectorMaster") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/").replace("/company-directors", "");
    }
    else if (LoadedPage == "ChargesMaster") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/").replace("/company-charges", "");
    }
    else if (LoadedPage == "CompanyReports") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/").replace("/company-reports", "");
    }
    else if (LoadedPage == "CompanyBookmarks") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/").replace("/company-bookmarks", "");
    }
    else if (LoadedPage == "CompanyAboutUs") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/").replace("/company-aboutus", "");
    }
    else if (LoadedPage == "CompanyReviews") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/").replace("/company-reviews", "");
    }
    else if (LoadedPage == "CompanyNotes") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/").replace("/company-notes", "");
    }
    else if (LoadedPage == "CompanyDocuments") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/").replace("/company-documents", "");
    }
    else if (LoadedPage == "CompanyTimeline") {
        window.top.document.location.href = window.location.pathname.replace("/company/", "/orders/").replace("/company-timeline", "");
    }
    // }
    //else {

    //    window.alert("User Verification Incomplete!! Cant place Order!!");
    //}
}



function SWLLoginPOPUP() {
    swal({
        title: "Login Required",
        content: {
            element: "div",
            attributes: {
                innerHTML: `
                <p style="font-size:18px; line-height:1.5; text-align:center;">
                    Please <strong>Login</strong> & Try Again to Update the Information.<br>
                    <a href="https://www.instafinancials.com/login.aspx"
                       style="color:#023E8A; text-decoration:underline;">
                       Click Here to Login
                    </a>
                </p>
            `
            }
        },
        button: "OK"
    });

    setTimeout(() => {
        // Style the OK button
        let btn = document.querySelector(".swal-button--confirm");
        if (btn) {
            btn.style.backgroundColor = "#023E8A";
            btn.style.color = "#fff";
        }

        // Style the title as a full-width ribbon
        let title = document.querySelector(".swal-title");
        if (title) {
            title.style.fontSize = "24px";
            title.style.backgroundColor = "#023E8A";   // blue background
            title.style.color = "#fff";                // white text
            title.style.padding = "12px";              // ribbon thickness
            title.style.borderRadius = "0";            // square edges for full bar
            title.style.display = "block";             // full width
            title.style.width = "100%";                // stretch across popup
            title.style.textAlign = "center";          // center the text
            title.style.margin = "0";                  // remove default margins
        }
    }, 50);
}

function updateRequest() {
    swal({
        title: "Update Request",
        content:
        {
            element: "div",
            attributes:
            {
                innerHTML: ` <p style="font-size:18px; line-height:1.5; text-align:center;"> Update Request is Received.<br> Please <strong>Refresh</strong> the page after a few mins.<br>  </p> `
            }
        }, button: "OK"
    }); setTimeout(() => {
        let btn = document.querySelector(".swal-button--confirm");
        if (btn) {
            btn.style.backgroundColor = "#023E8A"; btn.style.color = "#fff";
        }
        let title = document.querySelector(".swal-title");
        if (title) {
            title.style.fontSize = "24px";
            title.style.backgroundColor = "#023E8A";   // blue background
            title.style.color = "#fff";                // white text
            title.style.padding = "12px";              // ribbon thickness
            title.style.borderRadius = "0";            // square edges for full bar
            title.style.display = "block";             // full width
            title.style.width = "100%";                // stretch across popup
            title.style.textAlign = "center";          // center the text
            title.style.margin = "0";                  // remove default margins
        }
    }, 50);
}



function UpdateCompany(showAlert = true) {
    if ($('#navigationContentHolder_hdnUID').val() === 0 || $('#navigationContentHolder_hdnUID').val() === '') {
        SWLLoginPOPUP();
    }
    else {
        if (showAlert === true) {
            updateRequest();
        }
        var CID = $("#navigationContentHolder_hdnCID").val();

        $.ajax({
            type: "POST",
            url: "/company/company-master.aspx/UpdateCompany",
            data: "{CompanyID:" + JSON.stringify(CID) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = JSON.parse(result.d);
                if (objJson.data.IsSuccess) {

                    if (showAlert === true) {
                        swal("Data Successfully Updated. Reloading data...");
                        location.reload();
                    }
                    return false;
                }
                else {
                    swal("Unable to update company.");
                    return false;
                }
            },
            failure: function (response) {
                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                return false;
            }
        });
        return false;
    }
}

function UpdateDirectors() {
    if ($('#navigationContentHolder_hdnUID').val() === "0" || $('#navigationContentHolder_hdnUID').val() === '') {
        SWLLoginPOPUP();
    }
    else {
        updateRequest();
        var CID = $("#navigationContentHolder_hdnCID").val();

        $.ajax({
            type: "POST",
            url: "/director/director-master.aspx/UpdateDirectors",
            data: "{CompanyID:" + JSON.stringify(CID) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = JSON.parse(result.d);
                if (objJson.data.IsSuccess) {
                    swal("Data Successfully Updated. Reloading data...");
                    location.reload();
                    return false;
                }
                else {
                    swal("Unable to update directors.");
                    return false;
                }
            },
            failure: function (response) {
                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                return false;
            }
        });
        return false;
    }

}

function UpdateCharges() {
    if ($('#navigationContentHolder_hdnUID').val() === 0 || $('#navigationContentHolder_hdnUID').val() === '') {
        SWLLoginPOPUP();
    }
    else {
        updateRequest();
        var CID = $("#navigationContentHolder_hdnCID").val();

        $.ajax({
            type: "POST",
            url: "/charges/charges-master.aspx/UpdateCharges",
            data: "{CompanyID:" + JSON.stringify(CID) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = JSON.parse(result.d);
                if (objJson.data.IsSuccess) {
                    swal("Data Successfully Updated. Reloading data...");
                    location.reload();
                    return false;
                }
                else {
                    swal("Unable to update charges.");
                    return false;
                }
            },
            failure: function (response) {
                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                return false;
            }
        });
        return false;
    }
}

function ProductClicked(obj) {
    var PID = obj.id.replace("1", "");
    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();
    $.ajax({
        type: "POST",
        url: "/company/company-reports.aspx/PopulateProductData",
        data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + ",InstaProduct:" + JSON.stringify(PID) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var objJson = result.d;
            if (objJson.length > 0) {
                try {
                    $("#reportsContentHolder_UserProductsHolder")[0].innerHTML = objJson[0];
                    $("#reportsContentHolder_ProductDescription")[0].innerHTML = objJson[1];
                }
                catch (Error) {
                    console.log(Error);
                }
                finally {

                    return false;
                }
            }
            else if (objJson == false) {

                return false;
            }
        },
        failure: function (response) {

            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function checkAvailability(product) {
    var result = true;

    switch (product) {
        case 'InstaDetailed':
            if ($('#navigationContentHolder_aInstaDetailed').val() == '0')
                result = false;
            break;
        case 'InstaSummary':
            if ($('#navigationContentHolder_aInstaSummary').val() == '0')
                result = false;
            break;
        case 'InstaLegal':
            if ($('#navigationContentHolder_aInstaLegal').val() == '0')
                result = false;
            break;
        case 'InstaDocs':
            if ($('#navigationContentHolder_aInstaDocs').val() == '0')
                result = false;
            break;
        case 'InstaDocsV3':
            if ($('#navigationContentHolder_aInstaDocsV3').val() == '0')
                result = false;
            break;
        case 'InstaCombo':
            if ($('#navigationContentHolder_aInstaCombo').val() == '0')
                result = false;
            break;
        case 'BriskReport':
            if ($('#navigationContentHolder_aInstaLego').val() == '0')
                result = false;
        case 'CustomReport':
            if ($('#navigationContentHolder_aInstaLego').val() == '0')
                result = false;
            break;
    }
    if (!result) {
        swal("To unlock this product, please write to us at support@instafinancials.com(+91 8792827285) when a product is not configured for you.");
    }
    return result;
}

$(".btnProductNav").click(function () {
    var PID = this.id;
    var result = checkAvailability(this.id);
    if (result) {
        var CID = $("#navigationContentHolder_hdnCID").val();
        var UID = $("#navigationContentHolder_hdnUID").val();
        $.ajax({
            type: "POST",
            url: "/company/company-reports.aspx/PopulateProductData",
            data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + ",InstaProduct:" + JSON.stringify(PID) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson.length > 0) {
                    try {
                        $("#reportsContentHolder_UserProductsHolder")[0].innerHTML = objJson[0];
                        $("#reportsContentHolder_ProductDescription")[0].innerHTML = objJson[1];
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                    finally {

                        return false;
                    }
                }
                else if (objJson == false) {

                    return false;
                }
            },
            failure: function (response) {

                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    }
});









function OpenReport(InstaProductID, CompanyID, UserOrderID, OrderedDate, IsSubscription, OrderTypeID) {
    if ($('#navigationContentHolder_hdnUID').val() === 0 || $('#navigationContentHolder_hdnUID').val() === '') {
        SWLLoginPOPUP();
    }
    else {
        $.ajax({
            type: "POST",
            url: "/company/company-reports.aspx/SetReportData",
            data: "{CompanyID:" + JSON.stringify(CompanyID) + ",InstaProductID:" + JSON.stringify(InstaProductID) + ",UserOrderID:" + JSON.stringify(UserOrderID) + ",OrderedDate:" + JSON.stringify(OrderedDate) + ",IsSubscription:" + JSON.stringify(IsSubscription) + ",OrderTypeID:" + JSON.stringify(OrderTypeID) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson == true) {
                    try {
                        if (InstaProductID == 1)
                            window.location.href = "/company/insta-detailed.aspx";
                        else if (InstaProductID == 2)
                            window.location.href = "/company/insta-summary.aspx";
                        else if (InstaProductID == 3)
                            window.location.href = "/company/insta-docs.aspx";
                        else if (InstaProductID == 4)
                            window.location.href = "/company/insta-combo.aspx";
                        else if (InstaProductID == 5)
                            window.location.href = "/company/insta-sd.aspx";
                        else if (InstaProductID == 10)
                            window.location.href = "/company/insta-legal.aspx";
                        else if (InstaProductID == 11)
                            window.location.href = "/company/insta-brisk.aspx";
                        else if (InstaProductID == 15)
                            window.location.href = "/company/insta-custom.aspx";
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                    finally {

                        return false;
                    }
                }
                else if (objJson == false) {

                    return false;
                }
            },
            failure: function (response) {

                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });

        return false;
    }
}

function OpenMasterDocs() {
    if ($('#navigationContentHolder_hdnUID').val() === "0" || $('#navigationContentHolder_hdnUID').val() === '') {
        swal({
            title: "Login Required",
            content: {
                element: "div",
                attributes: {
                    innerHTML: `
                    <p style="font-size:15.6px; line-height:1.5; text-align:center;">
                        Please <strong>Login</strong> to access this section.<br>
                        <a href="https://www.instafinancials.com/accounts/Signup.aspx" style="color:#023E8A; text-decoration:underline;">Click Here to Register for Free</a><br><br>
                        <em>Thank You</em>
                    </p>
                `
                }
            },
            button: "OK"
        });

        setTimeout(() => {
            // style the OK button
            let btn = document.querySelector(".swal-button--confirm");
            if (btn) {
                btn.style.backgroundColor = "#023E8A";
                btn.style.color = "#fff";
            }

            // style the title
            let title = document.querySelector(".swal-title");
            if (title) {
                title.style.fontSize = "20px";
                title.style.color = "#023E8A";
            }

        }, 50);
    }
    else {
        var CID = $("#navigationContentHolder_hdnCID").val();
        var UID = $("#navigationContentHolder_hdnUID").val();
        $.ajax({
            type: "POST",
            url: "/company/company-reports.aspx/IsAllDocsAllowed",
            data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson == 1) {
                    window.location.href = "/company/insta-docs.aspx";
                }
                else {
                    swal("You are not allowed to view Company Documents.")
                }
            },
            failure: function (response) {
                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });

    }
}

function DownloadPDF(InstaProductID, CompanyID, UserOrderID, OrderedDate) {

    var ReportType = "";

    switch (InstaProductID) {
        case 1:
            ReportType = "InstaDetailed";
            break;
        case 2:
            ReportType = "InstaSummary";
            break;
        case 3:
            ReportType = "InstaDocs";
            break;
        case 4:
            ReportType = "InstaCombo";
            break;
        case 10:
            ReportType = "InstaLegal";
            break;
        case 11:
            ReportType = "BriskReport";
            break;
        case 15:
            ReportType = "CustomReport";
            break;
    }

    var iframe;
    iframe = document.createElement('iframe');
    iframe.src = '/insta-downloader.aspx?CompanyID=' + CompanyID + '&ReportType=' + ReportType + '&MyOrderID=' + UserOrderID + '&OrderedOn=' + OrderedDate + '&DocType=PDF';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    return false;
}

function DownloadExcel(InstaProductID, CompanyID, UserOrderID, OrderedDate) {

    var ReportType = "";

    switch (InstaProductID) {
        case 1:
            ReportType = "InstaDetailed";
            break;
        case 2:
            ReportType = "InstaSummary";
            break;
        case 3:
            ReportType = "InstaDocs";
            break;
        case 4:
            ReportType = "InstaCombo";
            break;
        case 10:
            ReportType = "InstaLegal";
            break;
        case 11:
            ReportType = "BriskReport";
            break;
        case 15:
            ReportType = "CustomReport";
            break;
    }

    var iframe;
    iframe = document.createElement('iframe');
    iframe.src = '/insta-downloader.aspx?CompanyID=' + CompanyID + '&ReportType=' + ReportType + '&MyOrderID=' + UserOrderID + '&OrderedOn=' + OrderedDate + '&DocType=Excel';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    return false;
}

function InserUpdateUserBookMarkDetail() {
    var allowSave = false;
    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();

    var CompanyBookmark = {};
    CompanyBookmark.CompanyID = CID;
    CompanyBookmark.InstaUserID = UID;
    CompanyBookmark.UserBookmarkID = $("#bookmarksContentHolder_hdnUBID").val();
    CompanyBookmark.IsCustomer = $('#bookmarksContentHolder_chkCustomer').is(':checked');
    CompanyBookmark.IsSupplier = $('#bookmarksContentHolder_chkSupplier').is(':checked');
    CompanyBookmark.IsCompetitor = $('#bookmarksContentHolder_chkCompetitor').is(':checked');
    CompanyBookmark.IsEmployer = $('#bookmarksContentHolder_chkEmployer').is(':checked');
    CompanyBookmark.IsOwnCompany = $('#bookmarksContentHolder_chkOwnCompany').is(':checked');
    CompanyBookmark.IsGroupCompany = $('#bookmarksContentHolder_chkGroupCompany').is(':checked');
    CompanyBookmark.IsOthers = $('#bookmarksContentHolder_chkOthers').is(':checked');

    allowSave = true;

    if (CompanyBookmark.IsOthers) {
        CompanyBookmark.OtherType = $("#bookmarksContentHolder_txtOtherType").val();
        if (CompanyBookmark.OtherType == '')
            allowSave = false;
    }

    if (allowSave) {
        $.ajax({
            type: "POST",
            url: "/company/company-bookmarks.aspx/InsertUpdate_UserBookMark",
            data: "{bookmarkData:" + JSON.stringify(CompanyBookmark) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson == 1) {
                    swal("Bookmarked data successfully saved.");
                    PopulateBookmarksData();
                }
                else if (objJson == 0 || objJson == -1) {
                    swal("Unable to save bookmarked data.");
                }
            },
            failure: function (response) {

                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    }
    else {
        swal("Kindly enter the type of company before saving.")
    }
}

function BuyReport(ProductID, CompanyID, OrderID, OrderedDate, UserID) {
    if (ProductID != "0" && CompanyID != 0) {
        $.ajax({
            type: "POST",
            url: "/company/company.aspx/checkIfCompanyProductOrdered",
            contentType: "application/json; charset=utf-8",
            data: "{CompanyID:" + JSON.stringify(CompanyID) + ",ProductID:" + JSON.stringify(ProductID) + "}",
            dataType: "json",
            async: false,
            success: function (result) {
                var objJson = result.d;
                if (objJson != null) {
                    if (objJson.Source == "userorder") {
                        swal({
                            title: "'" + objJson.ProductName + "'" + "report of this was ordered by " + objJson.UserEMail + " on " + objJson.OrderedDate + ".",
                            text: "Are you sure, you want to continue  to place order?",
                            icon: "success",
                            buttons: true,
                            allowOutsideClick: false,
                            closeOnClickOutside: false,
                            //dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    AddToCart(ProductID, CompanyID, OrderID, OrderedDate, UserID, 2); //SubscribedReport
                                }
                            });
                        return false;
                    }
                    else if (objJson.Source == "cart") {
                        swal({
                            title: "'" + objJson.ProductName + "'" + "report of this was added to cart by " + objJson.UserEMail + " on " + objJson.OrderedDate + ".",
                            text: "Are you sure, you want to continue  to place order?",
                            icon: "success",
                            buttons: true,
                            allowOutsideClick: false,
                            closeOnClickOutside: false,
                            //dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    AddToCart(ProductID, CompanyID, OrderID, OrderedDate, UserID, 2); //SubscribedReport
                                }
                            });
                        return false;
                    }
                    else {
                        AddToCart(ProductID, CompanyID, OrderID, OrderedDate, UserID, 2); //SubscribedReport
                    }
                }
                else {
                    AddToCart(ProductID, CompanyID, OrderID, OrderedDate, UserID, 2); //SubscribedReport
                }
                return false;
            },
            error: function (result) {
                flag = false;
            }
        });
    }
    return false;

}

function AddToCart(ProductID, CompanyID, OrderID, OrderedDate, UserID, OrderTypeID) {
    $.ajax({
        type: "POST",
        url: "/company/company.aspx/SaveInstaCartProducts",
        data: "{ReportInstaUserID:" + JSON.stringify(UserID) + ",ReportUserOrderID:" + JSON.stringify(OrderID) + ",ReportCompanyID:" + JSON.stringify(CompanyID) + ",OrderTypeID:" + JSON.stringify(OrderTypeID) + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result != null) {
                var objJson = result.d;
                if (objJson == "1" || objJson == 1) {
                    swal({
                        title: "Selected report added to cart",
                        text: "Do you want to add more reports?",
                        buttons: ["Add More", "View Cart"],
                        allowOutsideClick: false,
                        closeOnClickOutside: false,
                        icon: "success",
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                window.top.document.location.href = "/orders/qc-instacart.aspx";
                            }
                        });
                }
                else {
                    swal("Unable to add report to cart, please write to us at support@instafinancials.com(+91 8792827285) when a product is not added to cart.");
                }
            }
            return false;
        },
        failure: function (response) {
            return false;
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}
function LoadReportsData() {
    isMobile = GetDevice();

    if (isMobile) {
        $("#btnMobileOrderNow").show();
    }

    if (isMobile) {
        $(".nonMenu").addClass('hidden');
        $(".mobileOnly").removeClass('hidden');
    }
    else if (!isMobile && $('.i-insta__sidenav').hasClass('d-none')) {
        $(".nonMenu").removeClass('hidden');
        $(".mobileOnly").addClass('hidden');
    }
    else if (!isMobile && ($('.i-insta__sidenav').hasClass('d-none') == false)) {
        $(".nonMenu").addClass('hidden');
        $(".mobileOnly").addClass('hidden');
    }

    //load allowed product first - Lingaraj
    var PID = getDefaultProductReportToBeLoad();//"BriskReport";
    var CID = $("#navigationContentHolder_hdnCID").val();
    var UID = $("#navigationContentHolder_hdnUID").val();
    var RPTLoaded = $("#reportsContentHolder_hdnRPTLoaded").val();

    if (RPTLoaded != '1') {
        $.ajax({
            type: "POST",
            url: "/company/company.aspx/PopulateReportsData",
            data: "{CompanyID:" + JSON.stringify(CID) + ",InstaUserID:" + JSON.stringify(UID) + ",InstaProduct:" + JSON.stringify(PID) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var objJson = result.d;
                if (objJson.length > 0) {
                    try {
                        $($("#companynavigationContainer")[0]).hide();
                        $($("#directorsnavigationContainer")[0]).hide();
                        $($("#chargesnavigationContainer")[0]).hide();
                        $($("#bookmarksnavigationContainer")[0]).hide();
                        $($("#aboutusnavigationContainer")[0]).hide();
                        $($("#reviewnavigationContainer")[0]).hide();
                        $($("#notesnavigationContainer")[0]).hide();

                        $($("#reportsnavigationContainer")[0]).show();

                        $("#reportsContentHolder_UserProductsHolder")[0].innerHTML = objJson[0];
                        $("#reportsContentHolder_ProductDescription")[0].innerHTML = objJson[1];

                        if (objJson.length == 3) {
                            var AvailableReports = objJson[2];

                            if (!AvailableReports.briskRPT)
                                $(".briskRPT").css("color", "darkgrey");
                            if (!AvailableReports.customRPT)
                                $(".customRPT").css("color", "darkgrey");
                            if (!AvailableReports.detailedRPT)
                                $(".detailedRPT").css("color", "darkgrey");
                            if (!AvailableReports.comboRPT)
                                $(".comboRPT").css("color", "darkgrey");
                            if (!AvailableReports.summaryRPT)
                                $(".summaryRPT").css("color", "darkgrey");
                            if (!AvailableReports.docsRPT)
                                $(".docsRPT").css("color", "darkgrey");
                            if (!AvailableReports.legalRPT)
                                $(".legalRPT").css("color", "darkgrey");
                            if (!AvailableReports.legalCheckRPT)
                                $(".legalRPT").css("color", "darkgrey");
                            if (!AvailableReports.basicRPT)
                                $(".basicRPT").css("color", "darkgrey");
                        }
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                    finally {

                        return false;
                    }
                }
                else if (objJson == false) {

                    return false;
                }
            },
            failure: function (response) {

                return false;
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    }
    else {
        $($("#notesnavigationContainer")[0]).hide();
        $($("#reviewnavigationContainer")[0]).hide();
        $($("#aboutusnavigationContainer")[0]).hide();
        $($("#bookmarksnavigationContainer")[0]).hide();
        $($("#companynavigationContainer")[0]).hide();
        $($("#directorsnavigationContainer")[0]).hide();
        $($("#chargesnavigationContainer")[0]).hide();
        $($("#reportsnavigationContainer")[0]).show();
    }
}
function getDefaultProductReportToBeLoad() {
    var result = "InstaSummary";
    if ($('#navigationContentHolder_aInstaDetailed').val() == '1') { result = "InstaDetailed"; }
    if ($('#navigationContentHolder_aInstaSummary').val() == '1') { result = "InstaSummary"; }
    if ($('#navigationContentHolder_aInstaLegal').val() == '1') { result = "InstaLegal"; }
    if ($('#navigationContentHolder_aInstaDocs').val() == '1') { result = "InstaDocs"; }
    if ($('#navigationContentHolder_aInstaCombo').val() == '1') { result = "InstaCombo"; }
    if ($('#navigationContentHolder_aInstaLego').val() == '1') { result = "BriskReport"; }
    if ($('#navigationContentHolder_aInstaLego').val() == '1') { result = "CustomReport"; }
    return result;
}
function UpdateReport(ProductID, CompanyID, OrderID, OrderedDate, UserID) {

    if (ProductID != "0" && CompanyID != 0) {
        $.ajax({
            type: "POST",
            url: "/company/company.aspx/checkIfCompanyProductOrdered",
            contentType: "application/json; charset=utf-8",
            data: "{CompanyID:" + JSON.stringify(CompanyID) + ",ProductID:" + JSON.stringify(ProductID) + "}",
            dataType: "json",
            async: false,
            success: function (result) {
                objJson = result.d;
                if (objJson != null) {
                    if (objJson.Source == "userorder") {
                        swal({
                            title: "'" + objJson.ProductName + "'" + "report of this was ordered by " + objJson.UserEMail + " on " + objJson.OrderedDate + ".",
                            text: "Are you sure, you want to place order again?",
                            icon: "warning",
                            buttons: true,
                            allowOutsideClick: false,
                            closeOnClickOutside: false,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    AddToCart(ProductID, CompanyID, OrderID, OrderedDate, UserID, 3); //GetLatestReport
                                }
                            });
                        return false;
                    }
                    else if (objJson.Source == "cart") {
                        swal({
                            title: "'" + objJson.ProductName + "'" + "report of this was added to cart by " + objJson.UserEMail + " on " + objJson.OrderedDate + ".",
                            text: "Are you sure, you want to place order again?",
                            icon: "warning",
                            buttons: true,
                            allowOutsideClick: false,
                            closeOnClickOutside: false,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    AddToCart(ProductID, CompanyID, OrderID, OrderedDate, UserID, 3); //GetLatestReport
                                }
                            });
                    }
                    else {
                        AddToCart(ProductID, CompanyID, OrderID, OrderedDate, UserID, 3); //GetLatestReport
                    }
                }
                else {
                    AddToCart(ProductID, CompanyID, OrderID, OrderedDate, UserID, 3); //GetLatestReport
                }
                return false;
            },
            error: function (result) {
                flag = false;
            }
        });
    }
    return false;
}



///////for Company-Timeline UI/////////////

$(document).ready(function () {
    // Add click event listeners to timeline items
    $('.timeline-item').click(function () {
        // Toggle active class on click
        $(this).toggleClass('active');

        // Close other open items
        $('.timeline-item').not(this).removeClass('active');
    });
});

$(document).ready(function () {
    // Check if jQuery is loaded successfully
    if (typeof jQuery !== 'undefined') {
        console.log('jQuery is loaded.');

        // Hide all year contents initially
        $(".timeline-year-content").hide();

        // Handle click event on year titles to expand/collapse content
        $(".timeline-year-title").on("click", function () {
            var yearContent = $(this).next(".timeline-year-content");
            yearContent.slideToggle(300); // You can adjust the animation speed
        });
    } else {
        console.log('jQuery is not loaded.');
    }
});





function ReadCompanyChangedData(CompanyID) {

    $.ajax({
        type: "POST",
        url: "/company/company-timeline.aspx/CreateCompanyChangedTimeline", // Replace with the actual API endpoint
        data: { CompanyID: CompanyID },
        dataType: "json",
        success: function (data) {
            // Handle the data returned from the server
            if (data.length > 0) {
                // Process the data here
                console.log(data);
            } else {
                // Handle the case when no data is returned
                console.log("No data available.");
            }
        },
        error: function (xhr, status, error) {
            // Handle any errors that occur during the AJAX request
            console.error(error);
        }
    });
}

//InstaLegalYNCheck
function checkStatus(event) {
    event.preventDefault();
    swal({
        title: "Order Confirmation",
        content: {
            element: "p",
            attributes: {
                innerHTML: "InstaLegal YNCheck will check & confirm if there are any legal cases associated with the company Instantly.<br><span style='color: red;'>It will not provide Legal cases details such as case number, individual case status etc.</span><br><br><span style='color: red;'>The Cost is Rs 59 (50 + 18% GST) per check</span>"
            },
        },
        icon: "warning",
        buttons: true,
        dangerMode: false,
    }).then((willProceed) => {
        if (willProceed) {
            swal({
                title: "Checking...",
                /*text: "Please wait while we check the status. Maximum waiting time: 30 seconds.",*/
                content: {
                    element: "p",
                    attributes: {
                        innerHTML: "<span style='font-size: 14px; display: block; text-align: center;'>Please wait while we check the status. Maximum waiting time: 30 seconds.</span>",
                    },
                },
                icon: "info",

                buttons: false,
                closeOnClickOutside: false,
                allowOutsideClick: false,
                closeOnEsc: false,
                dangerMode: false,
            });
            //swal.showLoading();
            var UID = $("#navigationContentHolder_hdnUID").val();
            if (UID > 0) {
                $.ajax({
                    type: "POST",
                    url: "/company/company-master.aspx/GetStatus",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (result) {
                        swal.close(); // Close the loading swal
                        if (result.d == 1) {

                            swal({
                                title: "InstaLegal YN Check",
                                content: {
                                    element: "p",
                                    attributes: {
                                        innerHTML: "<span style='color: red;font-size: 20px; display: block; text-align: center;'>Legal Cases found associated with this company.</span><br><span style='display: block; text-align: center;'>Please order Our InstaLegal Report to know more about this company.</span>",
                                    },
                                },
                                buttons: {
                                    cancel: "Cancel",
                                    order: {
                                        text: "Order InstaLegal Report",
                                        value: "order",
                                        visible: true,
                                        className: "",
                                        closeModal: true // Close the swal when the button is clicked
                                    }
                                },
                                allowOutsideClick: false,
                                closeOnClickOutside: true,
                                dangerMode: false,
                            }).then((value) => {
                                if (value === "order") {
                                    OrderCompany();
                                }
                            });
                        }
                        else if (result.d == 2) {
                            swal({
                                title: "InstaLegal YNCheck",
                                content: {
                                    element: "p",
                                    attributes: {
                                        innerHTML: "<span style='color: green;font-size: 15pt;'>No Legal Cases found associated with this company.</span>"
                                    },
                                },
                                /*buttons: true*/
                                buttons: { ok: "OK" },
                                allowOutsideClick: false,
                                dangerMode: false,
                            });

                        }
                        else if (result.d == 3) {
                            swal({
                                title: "Insufficient Wallet Balance",
                                text: "Your wallet balance is low. Please visit your wallet page to load the balance and retry.",
                                buttons: {
                                    cancel: "Cancel",
                                    redirect: {
                                        text: "Recharge Wallet",
                                        value: "redirect",
                                    }
                                },
                                allowOutsideClick: false,
                                closeOnClickOutside: true,
                            }).then((value) => {
                                if (value === "redirect") {
                                    window.location.href = "https://www.instafinancials.com/insta-accounts/insta-wallet.aspx";
                                }
                            });
                        }
                        else if (result.d == -1) { // Fixed the comparison operator here
                            swal({
                                title: "Error",
                                content: {
                                    element: "p",
                                    attributes: {
                                        innerHTML: "<span style='color: red;'>Technical Error.</span>"

                                    },
                                },
                                text: "Please try again in 1-2 minute.",
                                buttons: true,
                                allowOutsideClick: false,
                                closeOnClickOutside: false,
                                dangerMode: true,
                            });
                        }
                    },
                    error: function () { // Removed unnecessary assignment in the error function
                        swal({
                            icon: "warning",
                            title: "Error",
                            text: "Technical Error.",
                            buttons: true,
                            allowOutsideClick: false,
                            closeOnClickOutside: false,
                            dangerMode: false,
                        });
                    },
                });
            }
            else {
                swal({
                    icon: "warning",
                    title: "Login Required!",
                    text: "Please login to check the status of availability of Legal cases.",
                    content: {
                        element: "p",
                        attributes: {
                            innerHTML: "<span style='color: Green;'>Thank you.</span>"
                        },
                    },
                    buttons: {
                        cancel: "Cancel",
                        redirect: {
                            text: "Login",
                            value: "redirect",
                        }
                    },
                    allowOutsideClick: false,
                    closeOnClickOutside: true,
                }).then((value) => {
                    if (value === "redirect") {
                        window.location.href = "https://www.instafinancials.com/login.aspx";
                    }
                });

            }
        }
    });
}

function showCheckingAlert() {
    let countdown = 30; // Maximum waiting time in seconds

    swal({
        title: "Checking...",
        text: `Please wait while we check the status. Maximum waiting time: ${countdown} seconds.`,
        icon: "info",
        buttons: false,
        closeOnClickOutside: false,
        closeOnEsc: false,
    });

    const interval = setInterval(() => {
        countdown -= 1;
        if (countdown >= 0) {
            swal({
                title: "Checking...",
                text: `Please wait while we check the status. Maximum waiting time: ${countdown} seconds.`,
                icon: "info",
                buttons: false,
                closeOnClickOutside: false,
                closeOnEsc: false,
            });
        } else {
            clearInterval(interval);
            swal.close();
        }
    }, 1000);
}



//reatils propuse for updateing mca



var RetailLoginToken = "";
var RetailSessionCookies = null;

var RetailLoadingTimers = [];

/*----------------------------------------------------------
    OPEN MODAL
----------------------------------------------------------*/





function RetryUpdateCompanyRetailsUser() {
    $("#divRetailError").hide();

    $("#divRetailLoading").show();

    StartRetailLoadingAnimation();
    UpdateCompanyRetailUser();

    return false;
}



function UpdateCompanyRetailUser() {

    CheckRetailMCALogin();

    return false;
}


function CheckRetailMCALogin() {

    var request = {
        InstaUserID: $("#navigationContentHolder_hdnUID").val()
    };

    $.ajax({

        type: "POST",

        url: "company-master.aspx/CheckRetailMCALogin",

        data: JSON.stringify({ request: request }),

        contentType: "application/json; charset=utf-8",

        dataType: "json",

        success: function (response) {

            var result = response.d;

            if (!result.Success) {

                swal(result.Message);
                return;

            }

            //==========================================================
            // First Time User
            //==========================================================
            if (!result.HasCredentials) {

                ResetRetailLoginModal();

                $("#mdlRetailMCALogin").modal({
                    backdrop: 'static',
                    keyboard: false
                });

                return;

            }

            //==========================================================
            // Credentials Already Exist
            //==========================================================
            ResetRetailLoginModal();

            $("#mdlRetailMCALogin").modal({
                backdrop: 'static',
                keyboard: false
            });
            SendRetailOTPUsingStoredCredentials();

        },

        error: function () {

            swal("Unable to check Retail MCA Login.");

        }

    });

}


function SendRetailOTPUsingStoredCredentials() {

    $("#divRetailLogin").hide();
    $("#divRetailLoading").fadeIn(200);
    $("#divRetailError").hide(); 

    StartRetailLoadingAnimation();

    var request = {
        InstaUserID: $("#navigationContentHolder_hdnUID").val()
    };

    $.ajax({

        type: "POST",

        url: "company-master.aspx/InitiateRetailMCALoginUsingStoredCredentials",

        data: JSON.stringify({ request: request }),

        contentType: "application/json; charset=utf-8",

        dataType: "json",

        success: function (response) {

            var result = response.d;

            if (!result.Success) {

                $("#divRetailLoading").hide();

                // Keep login hidden
                $("#divRetailLogin").hide();

                // Hide OTP
                $("#divOTP").hide();

                // Show retry/error panel
                $("#divRetailError").fadeIn();



                $("#lblRetailError").text(result.Message);

                return;
            }

            //==========================================================
            // Existing Session Reused
            //==========================================================
            if (result.SessionReused) {

                $("#divRetailLoading").hide();

                UpdateCompanyInformation();

                return;
            }

            //==========================================================
            // OTP Required
            //==========================================================
            if (result.OTPRequired) {

                RetailLoginToken = result.LoginToken;

                RetailOtpSentSuccessfully();

                return;
            }

            $("#divRetailLoading").hide();

            swal(result.Message);

        },

        error: function () {

            $("#divRetailLoading").hide();
            $("#divRetailLogin").hide();
            $("#divOTP").hide();

            $("#divRetailError").fadeIn();


        }

    });

}

/*----------------------------------------------------------
    RESET MODAL
----------------------------------------------------------*/
function ResetRetailLoginModal() {

    RetailLoginToken = "";
    RetailSessionCookies = null;

    $("#txtMCAUsername").val("");
    $("#txtMCAPassword").val("");
    $("#txtOTP").val("");

    $("#chkRetailConsent").prop("checked", false);

    $("#btnSendOTP")
        .prop("disabled", true)
        .html('<i class="fa fa-shield-alt mr-2"></i> Send OTP');

    $("#btnVerifyOTP")
        .prop("disabled", false)
        .text("Verify OTP");

    $("#divRetailLogin").show();
    $("#divRetailLoading").hide();
    $("#divOTP").hide();

    RetailLoadingReset();
}

/*----------------------------------------------------------
    CONSENT
----------------------------------------------------------*/
function RetailConsentChanged() {
    $("#btnSendOTP").prop("disabled", !$("#chkRetailConsent").is(":checked"));
}

/*----------------------------------------------------------
    LOADING RESET
----------------------------------------------------------*/
function RetailLoadingReset() {

    RetailLoadingTimers.forEach(function (t) {
        clearTimeout(t);
    });

    RetailLoadingTimers = [];

    $("#step1Icon").removeClass().addClass("RetailStepPending").html("");
    $("#step2Icon").removeClass().addClass("RetailStepPending").html("");
    $("#step3Icon").removeClass().addClass("RetailStepPending").html("");

    $("#step1Text").text("Preparing secure connection");
    $("#step2Text").text("Authenticating MCA Login");
    $("#step3Text").text("Requesting OTP from MCA Portal...");
}

/*----------------------------------------------------------
    LOADING HELPERS
----------------------------------------------------------*/
function RetailStepLoading(step) {
    $("#" + step)
        .removeClass()
        .addClass("RetailStepSpinner")
        .html("");
}

function RetailStepDone(step) {
    $("#" + step)
        .removeClass()
        .addClass("RetailStepDone")
        .html('<i class="fa fa-check"></i>');
}

/*----------------------------------------------------------
    START LOADING ANIMATION
----------------------------------------------------------*/
function StartRetailLoadingAnimation() {

    RetailLoadingReset();

    RetailStepLoading("step1Icon");

    RetailLoadingTimers.push(setTimeout(function () {

        RetailStepDone("step1Icon");
        RetailStepLoading("step2Icon");

    }, 1200));

    RetailLoadingTimers.push(setTimeout(function () {

        RetailStepDone("step2Icon");
        RetailStepLoading("step3Icon");

    }, 2600));

}

/*----------------------------------------------------------
    OTP SENT SUCCESS
----------------------------------------------------------*/
function RetailOtpSentSuccessfully() {
    $("#divRetailError").hide();
    RetailStepDone("step3Icon");

    $("#step3Text").text("OTP requested successfully.");

    setTimeout(function () {

        $("#divRetailLoading").fadeOut(300, function () {

            $("#divOTP").fadeIn(300);

        });

    }, 700);

}

/*----------------------------------------------------------
    SEND OTP
----------------------------------------------------------*/
function SendRetailOTP() {

    var userName = $.trim($("#txtMCAUsername").val());
    var password = $.trim($("#txtMCAPassword").val());
    var MCAInstaUserID = $.trim($("#navigationContentHolder_hdnUID").val());

    if (userName === "") {
        swal("Please enter MCA Username.");
        $("#txtMCAUsername").focus();
        return;
    }

    if (password === "") {
        swal("Please enter MCA Password.");
        $("#txtMCAPassword").focus();
        return;
    }

    if (!$("#chkRetailConsent").is(":checked")) {
        swal("Please confirm that you understand and wish to continue.");
        return;
    }

    $("#divRetailLogin").hide();
    $("#divRetailLoading").fadeIn(200);

    StartRetailLoadingAnimation();

    var CID = $("#navigationContentHolder_hdnCID").val();

    var request = {
        mcaUsername: userName,
        mcaPassword: password,
        mcaUserEmail: $("#txtSearchCompany").val(),
        mcaInstaID: MCAInstaUserID
    };

    $.ajax({
        type: "POST",
        url: "company-master.aspx/InitiateRetailMCALogin",
        data: JSON.stringify({ request: request }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (response) {

            var result = response.d;

            if (result.Success) {

                // Existing Session Reused
                if (result.SessionReused) {

                    $("#divRetailLoading").hide();
                    $("#mdlRetailMCALogin").modal("hide");

                    UpdateCompanyInformation();

                    return;
                }

                // OTP Required
                RetailLoginToken = result.LoginToken;

                RetailOtpSentSuccessfully();
            }
            else {

                $("#divRetailLoading").hide();
                $("#divRetailLogin").show();

                swal(result.Message);
            }
        },

        error: function (xhr, status, error) {

            $("#divRetailLoading").hide();
            $("#divRetailLogin").show();

            console.log(xhr.responseText);

            swal("Unable to initiate MCA Login.");
        }
    });
}

/*----------------------------------------------------------
    VERIFY OTP
----------------------------------------------------------*/
function VerifyRetailOTP() {

    var otp = $.trim($("#txtOTP").val());

    if (otp === "") {
        swal("Please enter OTP.");
        $("#txtOTP").focus();
        return;
    }

    if (otp.length !== 4) {
        swal("Please enter a valid 4 digit OTP.");
        $("#txtOTP").focus();
        return;
    }

    $("#btnVerifyOTP")
        .prop("disabled", true)
        .html('<i class="fa fa-spinner fa-spin mr-2"></i> Verifying...');

    var request = {
        InstaUserID: $("#navigationContentHolder_hdnUID").val(),
        OTP: otp
    };

    $.ajax({

        type: "POST",

        url: "company-master.aspx/VerifyRetailMCAOTP",

        data: JSON.stringify({ request: request }),

        contentType: "application/json; charset=utf-8",

        dataType: "json",

        success: function (response) {

            var result = response.d;

            if (result.Success) {

                swal({
                    title: "Authentication Successful",
                    text: result.Message,
                    icon: "success"
                });

                $("#mdlRetailMCALogin").modal("hide");

                // Next
                UpdateCompanyInformation();

            }
            else {

                swal(result.Message);

            }

            $("#btnVerifyOTP")
                .prop("disabled", false)
                .text("Verify OTP");

        },

        error: function () {

            $("#btnVerifyOTP")
                .prop("disabled", false)
                .text("Verify OTP");

            swal("Unable to verify OTP.");

        }

    });

}



function UpdateCompanyInformation() {

    var request = {
        InstaUserID: $("#navigationContentHolder_hdnUID").val(),
        CompanyID: $("#navigationContentHolder_hdnCID").val()
    };

    $.ajax({

        type: "POST",

        url: "company-master.aspx/UpdateCompanyInformation",

        data: JSON.stringify({ request: request }),

        contentType: "application/json; charset=utf-8",

        dataType: "json",

        beforeSend: function () {
            // Close Retail MCA modal
            $("#mdlRetailMCALogin").modal("hide");

            // Hide all Retail MCA sections
            $("#divRetailLogin").hide();
            $("#divRetailLoading").hide();
            $("#divOTP").hide();
            $("#divRetailError").hide();

            swal({
                title: "Updating Company Information",
                text: "Please wait while the latest information is being retrieved from MCA.",
                type: "info",
                showConfirmButton: false
            });

        },

        success: function (response) {

            var result = response.d;

            if (result.Success) {

                swal({
                    title: "Completed",
                    text: result.Message,
                    type: "success"
                });

                // Reload company profile
                location.reload();
            }
            else {

                swal(result.Message);

            }

        },

        error: function (xhr, status, error) {

            console.log(xhr);
            console.log(xhr.responseText);
            console.log(status);
            console.log(error);

            swal(xhr.responseText);
        }

    });

}


///////till here/////////////

//$(document).ready(function () {
//    $('.timeline-year').click(function () {
//        $(this).find('.timeline-year-content').slideToggle('fast');
//    });
//});




//function AddDirectorlegalReport_Tocart(obj) {
//    var rowindex = $(obj).closest('tr').index();
//    var productname = $('#directordet tbody tr')[rowindex].cells[1].innerText;
//        swal({
//            title: "You have selected to buy the legal report of Director with DIN " + DirDIN + "!!",
//            text: "Do you want to proceed?",
//            buttons: ["Cancel", "Confirm"],
//            allowOutsideClick: false,
//            closeOnClickOutside: false,
//            icon: "success",
//        })
//            .then((willDelete) => {
//                if (willDelete) {
//                    SaveDirectorLegalReporttoCart(DirDIN);

//                }
//            });


//}

////function AddDirectorlegalReport_Tocart1(DirDIN) {
////    if (DirDIN != null) {
////        swal({
////            title: "You have selected to buy the legal report of Director with DIN " + DirDIN + "!!",
////            text: "Do you want to proceed?",
////            buttons: ["Cancel", "Confirm"],
////            allowOutsideClick: false,
////            closeOnClickOutside: false,
////            icon: "success",
////        })
////            .then((willDelete) => {
////                if (willDelete) {
////                    SaveDirectorLegalReporttoCart(DirDIN);

////                }
////            });
////    }

////}

//function SaveDirectorLegalReporttoCart(DirDIN) {
//    var DIN = DirDIN;
//    var CID = $("#navigationContentHolder_hdnCID").val();
//    var UID = $("#navigationContentHolder_hdnUID").val();
//    var data = $("#directordet");
//    if (DIN != null && UID != 0) {
//        $.ajax({
//            type: "POST",
//            url: "/director/director-master.aspx/SaveInstaCart_DirectorLegalReport",
//            data: "{InstaUserID:" + JSON.stringify(UID) + ",CompanyID:" + JSON.stringify(CID) + ",DirectorDIN:" + JSON.stringify(DIN) + "}",
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (response) {
//                if (response != null) {
//                    var objJson = response.d;
//                    var objCartDTO = response.d;
//                    if (parseInt(objCartDTO[0].InsertedCount) > 0) {
//                        swal
//                            ({
//                                title: "Selected Legal Report added to cart!!",
//                                text: "Do you want to add more reports?",
//                                buttons: ["Add More", "View Cart"],
//                                allowOutsideClick: false,
//                                closeOnClickOutside: false,
//                                icon: "success",
//                            })
//                            .then((willDelete) => {
//                                if (willDelete) {
//                                    window.top.document.location.href = "/orders/qc-instacart.aspx";
//                                }
//                            });
//                    }
//                    else if (parseInt(objCartDTO[0].InsertedCount) == 0) {
//                        swal({
//                            title: "Selected Legal Report added to cart!!",
//                            text: "Do you want to add more reports?",
//                            buttons: ["Add More", "View Cart"],
//                            allowOutsideClick: false,
//                            closeOnClickOutside: false,
//                            icon: "success",
//                        })
//                            .then((willDelete) => {
//                                if (willDelete) {
//                                    window.top.document.location.href = "/orders/qc-instacart.aspx";
//                                }
//                            });
//                    }
//                    else {
//                        swal("Unable to add report to cart, please write to us at support@instafinancials.com(+91 8792827285) when a product is not added to cart.");
//                    }
//                }
//                return false;
//            },
//            failure: function (response) {
//                return false;
//            }
//        });
//    }
//    else if (UID =='0') {
//        swal
//            ({
//                text: "Kindly Login to Proceed!!",
//                allowOutsideClick: false,
//                closeOnClickOutside: false,
//            })
//    }
//}
