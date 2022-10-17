import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {activeRatingId, changeRating} = props
      const isActive = activeRatingId === rating.ratingId
      const onChangeRating = () => changeRating(rating.ratingId)
      const ratingClassName = isActive ? `and-up active-rating` : `and-up`

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onChangeRating}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilter = () => (
    <div>
      <h1 className="rating-heading">Ratings</h1>
      <ul className="ratings-list">{renderRatingList()}</ul>
    </div>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {activeCategoryId, changeCategory} = props
      const isActiveOn = activeCategoryId === category.categoryId
      const onChangeCategory = () => changeCategory(category.categoryId)
      const categoryClassName = isActiveOn
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onChangeCategory}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategoryFilter = () => (
    <div>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoryList()}</ul>
    </div>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilter} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryFilter()}
      {renderRatingFilter()}
      <button type="button" className="clear-filters-btn" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
