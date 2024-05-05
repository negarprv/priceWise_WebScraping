"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import error from "next/error";
import React, { FormEvent, useState } from "react";

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidAmazonProductUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      if (
        hostname.includes("amazon.com") ||
        hostname.includes("amazon.") ||
        hostname.endsWith("amazon")
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }

    return false;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchPrompt);

    if (!isValidLink) return alert("Please provide a valid Amazon link.");

    try {
      setIsLoading(true);

      // Scrape
      console.log(searchPrompt);
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className=" flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        placeholder="Enter product link"
        className="searchbar-input"
        onChange={(e) => {
          setSearchPrompt(e.target.value);
        }}
      />

      <button
        type="submit"
        disabled={searchPrompt === "" || isLoading}
        className="searchbar-btn"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
