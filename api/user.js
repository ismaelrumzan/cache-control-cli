export default () => {
  return Response.json(
    { name: "John Doe" },
    {
      status: 200,
      headers: {
        "Cache-Control": "s-maxage=86400",
      },
    }
  );
};

export const config = {
  runtime: "experimental-edge",
};
