export const dropdownMenu = (selection, props) => {
    const { options, onOptionClicked } = props;
  
    let select = selection.selectAll('select').data([null]);
    select = select
      .enter()
      .append('select')
      .merge(select)
      .on('change', function () {
        // Use function declaration for "this" keyword
        onOptionClicked(this.value);
      });
  
    let option = select.selectAll('option').data(options);
    option
      .enter()
      .append('option')
      .merge(option)
      .attr('value', d => d)
      .text(d => d);
  };
  