import { getPagesArray } from "../../../utils/pages";
// import MyButton from "../button/MyButton";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div>
      <div className="page__wrapper">
        {pagesArray.map((p) => {
          <button
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page__current" : "page"}
          >
            {p}
          </button>;
        })}
      </div>
    </div>
  );
};

export default Pagination;
