// navbar syles
export const NavStackStyle = {
  position: "sticky",
  background: "#111",
  top: 0,
  justifyContent: "space-between"
}

export const NavStyleLogo = {
  display: "flex",
  alignItems: "center"
}

// searchbar syles
export const SearchInputStyle = {
  outline:"none",
  border:"none"
}

export const SearchPaperStyle = {
  borderRadius:"20px",
  border: `1pz solid #e3e3e3`,
  padding:"0 0 0 15px"
}

export const SearchIconButton = {
  p:"10px",
  color:"red"
}

// Feed page syles
export const Feedstyles = {
  stack: {
    flexDirection: { sx: "column", md: "row" }
  },
  boxFirst: {
    height: { sx: "auto", md: "92vh" },
    borderRight: "1px solid #3d3d3d",
    px: { sx: 0, md: 2 }
  },
  textFirst: {
    mt: 1.5,
    color: "#fff",
  },
  boxSecond: {
    overflowY: "auto",
    height: "90vh",
    flex: 2
  }
}