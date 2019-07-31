import { connect } from "react-redux";
import heroActions from "../../actions/heroActions";
import HeroContainer from "../Heroes/HeroContainer";

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes,
        loading: state.loading,
        status: status.status
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchHeroes: () => dispatch(heroActions.fetchHeroes()),
    postHero: (hero) => dispatch(heroActions.postHero(hero))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeroContainer)