
export default {
  async fetch(request) {
    const url = new URL(request.url);

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    };

    const json = (data, status = 200) =>
      new Response(JSON.stringify(data), {
        status,
        headers
      });

    if (request.method !== "GET") {
      return json({
        ok: false,
        error: "Method not allowed"
      }, 405);
    }

    if (url.pathname === "/") {
      return json({
        name: "NOXRIDGE UPLOADER TEST V1",
        service: "Community Backend",
        status: "development",
        uploadEnabled: false
      });
    }

    if (url.pathname === "/v1/health") {
      return json({
        ok: true,
        service: "noxridge-uploader-v1",
        uploadEnabled: false
      });
    }

    return json({
      ok: false,
      error: "Endpoint not found"
    }, 404);
  }
};
