const storeIssuer = () => {
    let issuerType = document.getElementById("issuerType").value;
    let issuerId = document.getElementById("issuerId").value;
    let issuerName = document.getElementById("issuerName").value;
    let issuerUrl = document.getElementById("issuerUrl").value;
    let issuerEmail = document.getElementById("issuerEmail").value;
    let issuerSmartcontractAddress = document.getElementById("issuerSmartcontractAddress").value;
    let issuerImageUrlSelf = document.getElementById("issuerImageUrlSelf").value;
    let issuerImageUrlIpfs = ipfsUrl;

    let issuerImageUrl = null;
    if (issuerImageUrlSelf) {
        issuerImageUrl = document.getElementById("issuerImageUrlSelf").value;
    } else {
        issuerImageUrl = issuerImageUrlIpfs;
    }

    let issuerdata = {
        issuerType: issuerType,
        issuerId: issuerId,
        issuerName: issuerName,
        issuerUrl: issuerUrl,
        issuerEmail: issuerEmail,
        issuerSmartcontractAddress: issuerSmartcontractAddress,
        issuerImage: issuerImageUrl,
    };

    // store array data to the session storage
    sessionStorage.setItem("issuerData", JSON.stringify(issuerdata));
};

const displayIssuer = () => {
    let displayIssuer = JSON.parse(sessionStorage.issuerData);
    let created_issuer_text = "";
    for (let key in displayIssuer) {
        created_issuer_text += key + ": " + displayIssuer[key] + "<br>";
    }

    document.getElementById("hiddenIssuer").style.display = "inline";
    document.getElementById("toggleIssuer").innerHTML = created_issuer_text;
};

const storeBadge = () => {
    let badgeType = document.getElementById("badgeType").value;
    let badgeId = document.getElementById("badgeId").value;
    let badgeName = document.getElementById("badgeName").value;
    let badgeDescription = document.getElementById("badgeDescription").value;
    let badgeCriteria = document.getElementById("badgeCriteria").value;
    let badgeImage = document.getElementById("badgeImage").value;
    let badgeImageUrl = document.getElementById("badgeImageUrl").value;

    let badgedata = {
        badgeType: badgeType,
        badgeId: badgeId,
        badgeName: badgeName,
        badgeDescription: badgeDescription,
        badgeCriteria: badgeCriteria,
        badgeImage: badgeImage,
        badgeImageUrl: badgeImageUrl

    };

    // store array data to the session storage
    sessionStorage.setItem("badgeData", JSON.stringify(badgedata));
};

const displayBadge = () => {
    let displayBadge = JSON.parse(sessionStorage.badgeData);
    let created_badge_text = "";
    for (let key in displayBadge) {
        created_badge_text += key + ": " + displayBadge[key] + "<br>";
    }

    document.getElementById("hiddenBadge").style.display = "inline";
    document.getElementById("toggleBadge").innerHTML = created_issuer_text;
};

const storeRecipient = () => {
    let recipientType = document.getElementById("recipientType").value;
    let recipientId = document.getElementById("recipientId").value;
    let recipientSalt = document.getElementById("recipientSalt").value;
    let recipientHashed = document.getElementById("recipientHashed").value;
    let recipientEmail = document.getElementById("recipientEmail").value;

    let recipientdata = {
        recipientType: recipientType,
        recipientId: recipientId,
        recipientSalt: recipientSalt,
        recipientHashed: recipientHashed,
        recipientEmail: recipientEmail,
    };

    // store array data to the session storage
    sessionStorage.setItem("recipientData", JSON.stringify(recipientdata));
};

const displayRecipient = () => {
    let displayRecipient = JSON.parse(sessionStorage.recipientData);
    let created_recipient_text = "";
    for (let key in displayRecipient) {
        created_recipient_text += key + ": " + displayRecipient[key] + "<br>";
    }

    document.getElementById("hiddenRecipient").style.display = "inline";
    document.getElementById("toggleRecipient").innerHTML = created_recipient_text;
};

const storeMetaData = () => {
    let metadataInput1 = document.getElementById("metadataInput1").value;
    let metadataInput2 = document.getElementById("metadataInput2").value;

    let metadatadata = {
        metadataInput1: metadataInput1,
        metadataInput2: metadataInput2,

    };

    // store array data to the session storage
    sessionStorage.setItem("metadataData", JSON.stringify(metadatadata));
};

const displayMetaData = () => {
    let displayMetaData = JSON.parse(sessionStorage.metadataData);
    let created_metadata_text = "";
    for (let key in displayMetaData) {
        created_metadata_text += key + ": " + displayMetaData[key] + "<br>";
    }

    document.getElementById("hiddenMetaData").style.display = "inline";
    document.getElementById("toggleMetaData").innerHTML = created_metadata_text;
};