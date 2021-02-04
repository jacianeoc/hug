
function saveCenter(db, center) {
    return db.run(`
    INSERT INTO centers (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends

    ) VALUES(
        "${center.lat}",
        "${center.lng}",
        "${center.name}",
        "${center.about}",
        "${center.whatsapp}",
        "${center.images}" ,
        "${center.instructions}",
        "${center.opening_hours}",
        "${center.open_on_weekends}"
    );
` );
}

module.exports = saveCenter;