import React from 'react'

type Props = {
    id: string;
  placeholder: string;
  options: string[];
  selectedValue: string;
  onSelectChange: (value: string) => void;
}

export default function SelectBox({ id, placeholder, options, selectedValue, onSelectChange }: Props) {
    
  return (
    <>
        <div className="col-md-3 col-12 mb-4">
      <div className="css-b62m3t-container">
        <div className="select__control css-13cymwt-control">
          <div className="select__value-container select__value-container--is-multi css-hlgwow">
            <div className="select__placeholder css-1jqq78o-placeholder" id={`react-select-${id}-placeholder`}>
              {placeholder}
            </div>
            <div className="select__input-container css-19bb58m" data-value="">
              <input
                className="select__input"
                autoComplete="off"
                id={`react-select-${id}-input`}
                type="text"
                aria-autocomplete="list"
                aria-expanded="false"
                aria-haspopup="true"
                role="combobox"
                value={selectedValue}
                onChange={(e) => onSelectChange(e.target.value)}
              />
            </div>
          </div>
          <div className="select__indicators css-1wy0on6">
            <span className="select__indicator-separator css-1u9des2-indicatorSeparator"></span>
            <div className="select__indicator select__dropdown-indicator css-1xc3v61-indicatorContainer" aria-hidden="true">
              <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                {/* SVG içeriği */}
              </svg>
            </div>
          </div>
        </div>
        <div>
          {/* Görünmez bir input */}
          <input name={id} type="hidden" value="" />
        </div>
      </div>
    </div>
    </>
  )
}