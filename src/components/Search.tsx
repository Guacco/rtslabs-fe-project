import React from "react";

function Search() {
  return (
    <div className="flex flex-col items-center gap-y-4 py-20">
      <span className="text-3xl font-medium">Search for News</span>
      <input type="text" maxLength={100} className="h-12 w-1/4 rounded-md" />
      <span className="italic font-medium">
        &quot;Pst try searching something...&quot;
      </span>
    </div>
  );
}

export default Search;
