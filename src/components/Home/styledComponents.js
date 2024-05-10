import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 10vh;
  padding: 0.3rem 2.5rem;
  background-color: #f1f5f9;
`
export const WebsiteLogo = styled.img`
  height: 30px;
`
export const ProjectsContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  padding 2.5rem;
  display: flex;
  flex-direction: column;
`
export const SelectBox = styled.select`
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0.2rem 0.6rem;
  height: 35px;
  width: 350px;
  outline: none;
  color: #475569;
  font-size: 0.8rem;
`
export const ProjectsListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  width: 100%;
`
export const FailureContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  height: 250px;
`
export const FailureHead = styled.h1`
  color: #475569;
  font-size: 2rem;
  font-weight: bold;
`
export const FailureDes = styled.p`
  color: #475569;
  font-size: 0.8rem;
`
export const RetryBtn = styled.button`
  border-width: 0px;
  border-radius: 5px;
  background-color: #328af2;
  color: #ffffff;
  height: 30px;
  width: 100px:
  font-size: 0.8rem;
`
