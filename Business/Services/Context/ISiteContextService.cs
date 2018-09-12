﻿namespace Business.Services.Context
{
    public interface ISiteContextService
    {
        /// <summary>
        /// Holds the current codename of the site
        /// </summary>
        string SiteName { get; }

        /// <summary>
        /// Holds an active culture codename
        /// </summary>
        string CurrentSiteCulture { get; }

        /// <summary>
        /// Indicates what preview culture should be used in the preview mode
        /// </summary>
        string PreviewCulture { get; }

        /// <summary>
        /// Indicates if preview mode is enabled
        /// </summary>
        bool IsPreviewEnabled { get; }
    }
}
