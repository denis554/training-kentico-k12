//--------------------------------------------------------------------------------------------------
// <auto-generated>
//
//     This code was generated by code generator tool.
//
//     To customize the code use your own partial class. For more info about how to use and customize
//     the generated code see the documentation at http://docs.kentico.com.
//
// </auto-generated>
//--------------------------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

using CMS;
using CMS.Base;
using CMS.Helpers;
using CMS.DataEngine;
using CMS.DocumentEngine.Types.Training;
using CMS.DocumentEngine;

[assembly: RegisterDocumentType(HomeSection.CLASS_NAME, typeof(HomeSection))]

namespace CMS.DocumentEngine.Types.Training
{
	/// <summary>
	/// Represents a content item of type HomeSection.
	/// </summary>
	public partial class HomeSection : TreeNode
	{
		#region "Constants and variables"

		/// <summary>
		/// The name of the data class.
		/// </summary>
		public const string CLASS_NAME = "Training.HomeSection";


		/// <summary>
		/// The instance of the class that provides extended API for working with HomeSection fields.
		/// </summary>
		private readonly HomeSectionFields mFields;

		#endregion


		#region "Properties"

		/// <summary>
		/// HomeSectionID.
		/// </summary>
		[DatabaseIDField]
		public int HomeSectionID
		{
			get
			{
				return ValidationHelper.GetInteger(GetValue("HomeSectionID"), 0);
			}
			set
			{
				SetValue("HomeSectionID", value);
			}
		}


		/// <summary>
		/// Name.
		/// </summary>
		[DatabaseField]
		public string HomeName
		{
			get
			{
				return ValidationHelper.GetString(GetValue("HomeName"), @"");
			}
			set
			{
				SetValue("HomeName", value);
			}
		}


		/// <summary>
		/// Header.
		/// </summary>
		[DatabaseField]
		public string HomeHeader
		{
			get
			{
				return ValidationHelper.GetString(GetValue("HomeHeader"), @"");
			}
			set
			{
				SetValue("HomeHeader", value);
			}
		}


		/// <summary>
		/// Text.
		/// </summary>
		[DatabaseField]
		public string HomeText
		{
			get
			{
				return ValidationHelper.GetString(GetValue("HomeText"), @"");
			}
			set
			{
				SetValue("HomeText", value);
			}
		}

		/// <summary>
		/// Link.
		/// </summary>
		[DatabaseField]
		public string HomeButton
		{
			get
			{
				return ValidationHelper.GetString(GetValue("HomeButton"), @"");
			}
			set
			{
				SetValue("HomeButton", value);
			}
		}


		/// <summary>
		/// Gets an object that provides extended API for working with HomeSection fields.
		/// </summary>
		[RegisterProperty]
		public HomeSectionFields Fields
		{
			get
			{
				return mFields;
			}
		}


		/// <summary>
		/// Provides extended API for working with HomeSection fields.
		/// </summary>
		[RegisterAllProperties]
		public partial class HomeSectionFields : AbstractHierarchicalObject<HomeSectionFields>
		{
			/// <summary>
			/// The content item of type HomeSection that is a target of the extended API.
			/// </summary>
			private readonly HomeSection mInstance;


			/// <summary>
			/// Initializes a new instance of the <see cref="HomeSectionFields" /> class with the specified content item of type HomeSection.
			/// </summary>
			/// <param name="instance">The content item of type HomeSection that is a target of the extended API.</param>
			public HomeSectionFields(HomeSection instance)
			{
				mInstance = instance;
			}


			/// <summary>
			/// HomeSectionID.
			/// </summary>
			public int ID
			{
				get
				{
					return mInstance.HomeSectionID;
				}
				set
				{
					mInstance.HomeSectionID = value;
				}
			}


			/// <summary>
			/// Name.
			/// </summary>
			public string HomeName
			{
				get
				{
					return mInstance.HomeName;
				}
				set
				{
					mInstance.HomeName = value;
				}
			}


			/// <summary>
			/// Header.
			/// </summary>
			public string HomeHeader
			{
				get
				{
					return mInstance.HomeHeader;
				}
				set
				{
					mInstance.HomeHeader = value;
				}
			}


			/// <summary>
			/// Text.
			/// </summary>
			public string HomeText
			{
				get
				{
					return mInstance.HomeText;
				}
				set
				{
					mInstance.HomeText = value;
				}
			}


			/// <summary>
			/// Background image.
			/// </summary>
			public DocumentAttachment HomeBackgroundImage
			{
				get
				{
					return mInstance.GetFieldDocumentAttachment("HomeBackgroundImage");
				}
			}


			/// <summary>
			/// Link.
			/// </summary>
			public string HomeButton
			{
				get
				{
					return mInstance.HomeButton;
				}
				set
				{
					mInstance.HomeButton = value;
				}
			}
		}

		#endregion


		#region "Constructors"

		/// <summary>
		/// Initializes a new instance of the <see cref="HomeSection" /> class.
		/// </summary>
		public HomeSection() : base(CLASS_NAME)
		{
			mFields = new HomeSectionFields(this);
		}

		#endregion
	}
}