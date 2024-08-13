export default async (request, context) => {
    const url = new URL(request.url); // Move the URL initialization to the top

    if (url.searchParams.get("method") !== "transform") {
        return; // This should return something like `new Response()` or `context.next()` if `method` is not "transform"
    }

    const response = await context.next();
    const page = await response.text(); // Change `context.text()` to `response.text()`
    const regex = /LOCATION_UNKNOWN/i;
    const location = `${context.geo.city}, ${context.geo.country.name}`; // Corrected 'county' to 'country'
    const updatedPage = page.replace(regex, location);

    return new Response(updatedPage, response);
};
