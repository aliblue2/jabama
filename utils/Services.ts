import axios from "axios";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkcmd3Y3BxZm9ja2Rtd3lud2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2MDU2MTIsImV4cCI6MjA0MjE4MTYxMn0.YtWh54wOhScSQc9txx0CEHCpGw7XJima2FLxf55EMJc";

export async function getAllPopularDestinations() {
  const response = await axios.get(
    "https://kdrgwcpqfockdmwynwgz.supabase.co/rest/v1/popular_destination?select=*",
    {
      headers: {
        apikey: apiKey,
        Authorization: "Bearer " + apiKey,
      },
    }
  );
  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant fetch popular destination from server ");
  }

  return response.data;
}

export async function getAllPlaces(state?: string) {
  let baseurl =
    "https://kdrgwcpqfockdmwynwgz.supabase.co/rest/v1/places?select=*";
  if (state && state.trim() !== "") {
    baseurl = `https://kdrgwcpqfockdmwynwgz.supabase.co/rest/v1/places?state=eq.${state}&select=*'`;
  }
  const response = await axios.get(baseurl, {
    headers: {
      apikey: apiKey,
      Authorization: apiKey,
    },
  });

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant fetch all places");
  }

  return response.data;
}

export async function getPlaceInfo(placeId: string) {
  const baseUrl = `https://kdrgwcpqfockdmwynwgz.supabase.co/rest/v1/places?id=eq.${placeId}&select=*`;
  const response = await axios.get(baseUrl, {
    headers: {
      apikey: apiKey,
      Authorization: apiKey,
    },
  });

  if (response.status >= 500 || response.status >= 400) {
    throw new Error("cant fetch place information");
  }

  return response.data;
}

export async function getAllBanners() {
  const response = await axios.get(
    "https://kdrgwcpqfockdmwynwgz.supabase.co/rest/v1/banners?select=*",
    {
      headers: {
        apikey: apiKey,
        Authorization: apiKey,
      },
    }
  );

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant fetch all places");
  }

  return response.data;
}
