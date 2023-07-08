import PropTypes from 'prop-types'

export const Header = ({ title, subtitle, url, label, color }) => {
    return (
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">{title}</h1>
                    <h2 className="masthead-subheading mb-0">{subtitle}</h2>
                    <a className={`btn btn-${color} btn-xl rounded-pill mt-5`} href={url}>{label}</a>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}